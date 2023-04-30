import React from 'react';
import { useState } from 'react';

const View = () => {
  const [product, setProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);

  function getAllProducts() {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((data) => {
        console.log("Show Catalog of Products: ");
        console.log(data);
        setProduct(data);
      });
    setViewer1(!viewer1);
  }

  let showAllItems = product.map((el) => {
    return (
      <div
        key={el._id}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-4"
      >
        <img src={el.image} className="w-full h-auto" />
        <br />
        <div className="text-lg font-bold">{el.title}</div>
        <div className="text-gray-500">{el.category}</div>
        <div className="text-lg font-bold">${el.price}</div>
        <div className="flex items-center">
          <div className="text-yellow-400">{el.rating.rate}</div>
          <div className="text-gray-500 ml-2">({el.rating.count})</div>
        </div>
      </div>
    );
  });

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-8">Catalog of Products</h1>

    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => getAllProducts()}
      >
        {viewer1 ? "Hide All Products" : "Show All Products"}
      </button>


      <h1 className="text-2xl font-bold my-8">Show all available products.</h1>
      <hr className="my-8" />
      {viewer1 && <div className="my-8">Products {showAllItems}</div>}
      <hr className="my-8" />
    </div>
  );
};

export default View;