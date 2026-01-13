"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Buttons } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/buttonNew";

const API_URL = "http://localhost:3001/cars";

export default function CarsDashboard() {
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState({
  brand: "",
  model: "",
  year: "",
  pricePerDay: "",
  imageUrl: "",
  superior: "",
});
  const [editingCarId, setEditingCarId] = useState(null);
  const [editForm, setEditForm] = useState({ brand: "", model: "", year: "", pricePerDay: "" });

  // Fetch cars on mount
 const fetchCars = async () => {
  try {
    const res = await fetch("http://localhost:3001/cars");
    const data = await res.json();
    setCars(data);
  } catch (err) {
    console.error("Error fetching cars:", err);
  }
};

// Fetch cars on mount
useEffect(() => {
  (async () => {
    await fetchCars();
  })();
}, []);



  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Add new car
  const handleSubmit = async (e) => {
  e.preventDefault();

  // 1️⃣ Basic validation
  if (!form.brand || !form.model || !form.year || !form.pricePerDay) {
    alert("Please fill in all fields");
    return;
  }

  // 2️⃣ Prepare payload with correct types
  const newCar = {
  brand: form.brand.trim(),
  model: form.model.trim(),
  year: Number(form.year),
  pricePerDay: Number(form.pricePerDay),
  imageUrl: form.imageUrl.trim() // ⬅️ added here
};


  // 3️⃣ Check that numbers are valid
  if (isNaN(newCar.year) || isNaN(newCar.pricePerDay)) {
    alert("Year and Price/Day must be valid numbers");
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCar),
    });

    // 4️⃣ Handle non-OK response
    if (!res.ok) {
      const errorData = await res.json(); // NestJS often returns JSON with message
      console.error("Backend error:", errorData);
      alert("Failed to add car: " + (errorData.message || res.statusText));
      return;
    }

    // 5️⃣ Refresh car list and reset form
    await fetchCars();
    setForm({ brand: "", model: "", year: "", pricePerDay: "", imageUrl: "" });
  } catch (err) {
    console.error("Network or fetch error:", err);
    alert("Failed to add car. Check console for details.");
  }
};


  // Delete car
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setCars(cars.filter(car => car.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Start editing
  const startEdit = (car) => {
    setEditingCarId(car.id);
    setEditForm({ brand: car.brand, model: car.model, year: car.year, pricePerDay: car.pricePerDay });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingCarId(null);
  };

  // Save edited car
  const saveEdit = async (id) => {
    try {
      const updatedCar = {
        ...editForm,
        year: Number(editForm.year),
        pricePerDay: Number(editForm.pricePerDay),
      };
      await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCar),
      });
      await fetchCars();
      setEditingCarId(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex gap-6 p-6 bg-black text-white min-h-screen">
    <Button href="../" action={"Go Back"}></Button>
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1A1A] p-4 rounded-lg">
        <h1 className="text-2xl font-bold text-purple-500 mb-6">RentNGo Admin</h1>
        <ul>
          <li className="mb-2 cursor-pointer hover:text-purple-500">Dashboard</li>
          <li className="mb-2 cursor-pointer hover:text-purple-500">Cars</li>
          <li className="mb-2 cursor-pointer hover:text-purple-500">Users</li>
          <li className="mb-2 cursor-pointer hover:text-purple-500">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <Card className="mb-6 bg-[#1A1A1A]">
          <CardHeader>
            <CardTitle>Cars Management</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add Car Form */}
            <form className="flex gap-2 mb-4" onSubmit={handleSubmit}>
              <Input placeholder="Brand" name="brand" value={form.brand} onChange={handleChange} />
              <Input placeholder="Model" name="model" value={form.model} onChange={handleChange} />
              <Input placeholder="Year" name="year" value={form.year} onChange={handleChange} />
              <Input placeholder="Price/Day" name="pricePerDay" value={form.pricePerDay} onChange={handleChange} />
              <Input placeholder="Superior" name="superior" value={form.superior} onChange={handleChange} />
              <Input
                    placeholder="Image URL"
                    name="imageUrl"
                    value={form.imageUrl || ""}
                    onChange={handleChange}
                    />

              <Buttons type="submit" className="bg-purple-500 text-white">Add</Buttons>
            </form>

            {/* Cars Table */}
            <table className="w-full text-white border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th>ID</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Price/Day</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car.id} className="border-b border-gray-800 hover:bg-gray-900">
                    <td>{car.id}</td>

                    {/* Inline editing for car */}
                    {editingCarId === car.id ? (
                      <>
                        <td><Input name="brand" value={editForm.brand} onChange={handleEditChange} /></td>
                        <td><Input name="model" value={editForm.model} onChange={handleEditChange} /></td>
                        <td><Input name="year" value={editForm.year} onChange={handleEditChange} /></td>
                        <td><Input name="pricePerDay" value={editForm.pricePerDay} onChange={handleEditChange} /></td>
                        <td className="flex gap-2">
                          <Buttons className="bg-green-600" onClick={() => saveEdit(car.id)}>Save</Buttons>
                          <Buttons className="bg-gray-600" onClick={cancelEdit}>Cancel</Buttons>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.pricePerDay}</td>
                        <td className="flex gap-2">
                          <Buttons className="bg-purple-500 text-white" onClick={() => startEdit(car)}>Edit</Buttons>
                          <Buttons className="bg-red-600" onClick={() => handleDelete(car.id)}>Delete</Buttons>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
