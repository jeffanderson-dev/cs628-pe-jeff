import { useParams, useNavigate } from "react-router-dom";

export default function CityDetails({ cities }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const city = cities.find((c) => String(c.id) === String(id));

  if (!city) return <p>City not found.</p>;

  return (
    <section className="card">
      <h3>City Details</h3>
      <p><strong>Name:</strong> {city.name}</p>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {Number(city.population).toLocaleString()}</p>

      <div className="desc-card">
        <h4>About</h4>
        <p>{city.description && city.description.trim()
          ? city.description
          : "No description provided."}
        </p>
      </div>

      <button className="primary" onClick={() => navigate("/add-city")}>
        Add City
      </button>
    </section>
  );
}