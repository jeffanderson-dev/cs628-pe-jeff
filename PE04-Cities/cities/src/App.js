import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,
  Navigate,
  Link,
} from "react-router-dom";
import CitiesList from "./components/CitiesList";
import CityDetails from "./components/CitiesDetails";
import AddCity from "./components/AddCity";
import "./styles.css";

export default function App() {
  const [cities, setCities] = useState([
    {
      id: 1,
      name: "Seattle",
      country: "USA",
      population: 780995,
      description: "Tech hub in the PNW and home of City University of Seattle",
    },
    {
      id: 2,
      name: "Catania",
      country: "Italy",
      population: 297517,
      description: "Jeff's current home city",
    },
  ]);

  const addCity = (city) => setCities((prev) => [...prev, city]);

  return (
    <Router>
      <main className="page">
        <h1 className="appTitle">Cities Application</h1>

        <nav className="tabs">
          <Link to="/cities">Cities List</Link>
          <Link to="/add-city">Add City</Link>
        </nav>
        {/*nested routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/cities" replace />} />
          <Route path="/cities" element={<CitiesList cities={cities} />}>
            <Route path=":id" element={<CityDetails cities={cities} />} />
          </Route>
          <Route path="/add-city" element={<AddCity onAdd={addCity} />} />
        </Routes>
      </main>
    </Router>
  );
}
