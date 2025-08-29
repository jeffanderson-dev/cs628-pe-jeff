// logic for creating a recipe

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddRecipe() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    cuisine: '',
    prepTime: '',
    cookTime: '',
    notes: ''
  });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const payload = {
      name: form.name,
      ingredients: form.ingredients.split(',').map((s) => s.trim()).filter(Boolean),
      instructions: form.instructions,
      cuisine: form.cuisine || null,
      prepTime: form.prepTime ? Number(form.prepTime) : null,
      cookTime: form.cookTime ? Number(form.cookTime) : null,
      notes: form.notes || null,
    };

    const res = await fetch('/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const txt = await res.text();
      alert(`Create failed: ${txt}`);
      return;
    }

    const created = await res.json();
    nav(`/recipes/${created._id}`);
  }

  return (
    <form className="card" onSubmit={onSubmit}>
      <h2>Add Recipe</h2>
      <label>Name<input name="name" value={form.name} onChange={onChange} required /></label>
      <label>Ingredients (comma-separated)
        <textarea name="ingredients" value={form.ingredients} onChange={onChange} rows={3} />
      </label>
      <label>Instructions
        <textarea name="instructions" value={form.instructions} onChange={onChange} rows={6} required />
      </label>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <label>Cuisine<input name="cuisine" value={form.cuisine} onChange={onChange} /></label>
        <label>Prep (min)<input type="number" name="prepTime" value={form.prepTime} onChange={onChange} /></label>
        <label>Cook (min)<input type="number" name="cookTime" value={form.cookTime} onChange={onChange} /></label>
      </div>
      <label>Notes
        <textarea name="notes" value={form.notes} onChange={onChange} rows={3} />
      </label>
      <button className="primary" type="submit">Save</button>
    </form>
  );
}
