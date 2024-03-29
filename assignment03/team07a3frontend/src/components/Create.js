import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [product, setProduct] = useState({
    pid: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    averageRating: '',
    ratingCount: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct(prevProduct => {
      return {
        ...prevProduct,
        [name]: value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
      .then(response => {
        console.log(response);
      })
      .then(data => {
        console.log("New product added");
        console.log(data)
    })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form className="bg-white p-6 rounded-lg shadow-md w-1/2" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="pid">
            ID
          </label>
          <input
            className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="pid"
            type="number"
            placeholder="Product ID"
            name="pid"
            value={product.id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="title"
            type="text"
            placeholder="Product Title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="price"
            type="number"
            placeholder="Product Price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="description"
            placeholder="Product Description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="mens_clothing">Men's Clothing</option>
            <option value="jewelry">Jewelry</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="image"
            type="text"
            placeholder="Product Image URL"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="averageRating">
            Average Rating
          </label>
          <input
            className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="averageRating"
            type="number"
            step="0.1"
            min="1"
            max="5"
            placeholder="Product Average Rating"
            name="averageRating"
            value={product.averageRating}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ratingCount">
            Rating Count
          </label>
          <input
            className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="ratingCount"
            type="number"
            placeholder="Product Rating Count"
            name="ratingCount"
            value={product.ratingCount}
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Create;
