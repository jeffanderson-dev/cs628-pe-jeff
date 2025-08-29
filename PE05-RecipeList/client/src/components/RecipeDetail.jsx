// shows the recipe details and handles deletion logic

import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function RecipeDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/recipes/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load recipe');
        return r.json();
      })
      .then(setRecipe)
      .catch((e) => setError(String(e)));
  }, [id]);

  // delete recipe
  async function handleDelete() {
    if (!window.confirm('Delete this recipe?')) return;
    const res = await fetch(`/recipes/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const txt = await res.text();
      alert(`Delete failed: ${txt}`);
      return;
    }
    nav('/recipes');
  }

  if (!id) return <p>Select a recipe from the list.</p>;
  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>Loading…</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      {recipe.cuisine && <p><strong>Cuisine:</strong> {recipe.cuisine}</p>}
      <p><strong>Prep Time:</strong> {recipe.prepTime ? `${recipe.prepTime} min` : 'N/A'}</p>
      <p><strong>Cook Time:</strong> {recipe.cookTime ? `${recipe.cookTime} min` : 'N/A'}</p>

      <p><strong>Ingredients</strong></p>
      <ul>{recipe.ingredients?.map((ing, i) => <li key={i}>{ing}</li>)}</ul>

      <p><strong>Instructions</strong></p>
      <p style={{ whiteSpace: 'pre-wrap' }}>{recipe.instructions}</p>

      {recipe.notes && (
        <>
          <p><strong>Notes</strong></p>
          <p style={{ whiteSpace: 'pre-wrap' }}>{recipe.notes}</p>
        </>
      )}

      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <Link to={`/edit/${recipe._id}`}><button className="primary">Edit</button></Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
