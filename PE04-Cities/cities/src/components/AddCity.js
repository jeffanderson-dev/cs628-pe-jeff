import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCity({ onAdd }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // create a new city object and add it to state
    onAdd({
      id: Date.now(),
      name: name.trim(),
      country: country.trim(),
      population: Number(population) || 0,
      description: description.trim(),
    });

    // redirect to Cities List after adding
    navigate("/cities", { replace: true });
  };

  return (
    <section className="card">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <br />
        <label>
          Population:
          <input
            required
            type="number"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional short description about the city"
          />
        </label>
        <br />
        <button type="submit" className="primary">Add City</button>
      </form>
    </section>
  );
}
