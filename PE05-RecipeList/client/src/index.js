import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RecipeList />} />
          <Route path="recipes" element={<RecipeList />}>
            <Route path=":id" element={<RecipeDetail />} />
          </Route>
          <Route path="add" element={<AddRecipe />} />
          <Route path="edit/:id" element={<EditRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
