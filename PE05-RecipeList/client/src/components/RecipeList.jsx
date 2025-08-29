// renders the recipe list
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('/recipes')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load recipes');
        return r.json();
      })
      .then(setRecipes)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16 }}>
      <div className="card">
        <h2>All Recipes</h2>
        <ul>
          {recipes.map((r) => (
            <li key={r._id}>
              <Link to={`/recipes/${r._id}`}>{r.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <Outlet />
      </div>
    </div>
  );
}
