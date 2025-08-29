import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import recipesRouter from './routes/recipes.mjs'
import { getDb, client } from "./db.mjs";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' })); // sanity check
app.use("/recipes", recipesRouter);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
