import { Link, Outlet } from "react-router-dom";

export default function CitiesList({ cities }) {
  return (
    <section className="card">
      <h2>Cities List</h2>
      <ul>
        {cities.map((c) => (
          <li key={c.id}>
            <Link to={`/cities/${c.id}`}>{c.name}</Link> — {c.country}
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </section>
  );
}
