import express from "express";
import { getDb } from "../db.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();
const COLLECTION = "recipes";

// check if string is valid MongoDB objectID
function isValidObjectId(id) {
  return ObjectId.isValid(id);
}
// validate required fields for creating
// name must be non-empty string
// ingredients must be array
// instructions can't be left empty
function validateCreate(body) {
  const errors = [];
  if (!body.name || typeof body.name !== "string") errors.push("name");
  if (!Array.isArray(body.ingredients)) errors.push("ingredients[]");
  if (!body.instructions || typeof body.instructions !== "string")
    errors.push("instructions");
  return errors;
}

// GET /recipes
// return all recipes
router.get("/", async (req, res) => {
  try {
    const collection = (await getDb()).collection(COLLECTION);
    const results = await collection
      .find({})
      .project({ name: 1, cuisine: 1, createdAt: 1 })
      .sort({ createdAt: -1 })
      .toArray();
    res.status(200).json(results);
  } catch (err) {
    // troubleshooting
    console.error(err?.stack || err); // print entire stack trace when available
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

// GET /recipes/:id
// return a single recipe by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id))
      return res.status(400).json({ error: "Invalid id" });

    const collection = (await getDb()).collection(COLLECTION);
    const result = await collection.findOne({ _id: new ObjectId(id) });

    if (!result) return res.status(404).json({ error: "Not found" });
    res.status(200).json(result);
  } catch (err) {
    console.error(err?.stack || err);
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
});

// POST /recipes
// creates a new recipe
router.post("/", async (req, res) => {
  try {
    const errors = validateCreate(req.body);
    console.log("POST /recipes body:", req.body);
    if (errors.length)
      return res
        .status(400)
        .json({ error: "Validation error", fields: errors });

    // normalize ingredients in case the client sent a comma-separated string
    const ingredientsInput = Array.isArray(req.body.ingredients)
      ? req.body.ingredients
      : String(req.body.ingredients || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);

    const now = new Date();
    const doc = {
      name: String(req.body.name).trim(),
      ingredients: ingredientsInput.map((s) => String(s)),
      instructions: String(req.body.instructions).trim(),
      cuisine: req.body.cuisine ? String(req.body.cuisine).trim() : null,
      prepTime:
        "prepTime" in req.body ? Number(req.body.prepTime) || null : null,
      cookTime:
        "cookTime" in req.body ? Number(req.body.cookTime) || null : null,
      notes: req.body.notes ? String(req.body.notes).trim() : null,
      createdAt: now,
      updatedAt: now,
    };

    const collection = (await getDb()).collection(COLLECTION);
    const result = await collection.insertOne(doc);
    res.status(201).json({ _id: result.insertedId, ...doc });
  } catch (err) {
    console.error(err?.stack || err);
    res.status(500).json({ error: "Failed to create recipe" });
  }
});


// PATCH /recipes/:id (UPDATE)
// update fields of an existing recipe
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.status(400).json({ error: "Invalid id" });

    // only allow known fields
    const allowed = ["name", "ingredients", "instructions", "cuisine", "prepTime", "cookTime", "notes"];
    const changes = Object.fromEntries(
      Object.entries(req.body).filter(([k]) => allowed.includes(k))
    );

    // normalize ingredients (accept string or array)
    if ("ingredients" in changes && !Array.isArray(changes.ingredients)) {
      changes.ingredients = String(changes.ingredients)
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);
    }

    const col = (await getDb()).collection("recipes");
    const result = await col.updateOne({ _id: new ObjectId(id) }, { $set: changes });

    if (result.matchedCount === 0) return res.status(404).json({ error: "Not found" });
    const doc = await col.findOne({ _id: new ObjectId(id) });
    res.status(200).json(doc);
  } catch (err) {
    console.error(err?.stack || err);
    res.status(500).json({ error: "Failed to update recipe" });
  }
});

// DELETE /recipes/:id
// remove a recipe by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id))
      return res.status(400).json({ error: "Invalid id" });

    const collection = (await getDb()).collection(COLLECTION);
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0)
      return res.status(404).json({ error: "Not found" });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err?.stack || err);
    res.status(500).json({ error: "Failed to delete recipe" });
  }
});

export default router;
