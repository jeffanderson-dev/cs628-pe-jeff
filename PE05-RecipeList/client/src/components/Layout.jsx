import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <nav className="container">
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/add">Add Recipe</NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}