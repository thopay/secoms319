import React, { useState } from 'react';

const View = () => {
  const [product, setProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [oneProduct, setOneProduct] = useState([]);
  const [viewer2, setViewer2] = useState(false);

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

  function getOneProduct(id) {
    if (id >= 1 && id <= 20) {
        fetch("http://localhost:4000/" + id)
          .then((res) => res.json())
          .then((data) => {
            console.log("Show One Product: ");
            console.log(data);
            setOneProduct(data);
          });
        setViewer2(true);
    } else {
        console.log("Invalid Product ID");
        setViewer2(false);
    }
  }

  let showAllItems = product.map((el) => {
    return (
      <div
        key={el._id}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-4"
      >
        <img src={el.image} className="w-full h-auto" alt={el.title} />
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

  let showOneItem = oneProduct.map((el) => {
    return (
      <div
        key={el._id}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-4"
      >
        <img src={el.image} className="w-full h-auto" alt={el.title} />
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

      <input
        type="text"
        id="id"
        name="id"
        placeholder="Enter Product ID"
        onChange={(e) => getOneProduct(e.target.value)}
        className="border border-gray-400 rounded-md px-4 py-2 my-4 ml-3"
      />

      {viewer1 && <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{showAllItems}</div>}
      <hr className="my-8" />
      <h1>Product by ID:</h1>
      {viewer2 && <div className="my-8">{showOneItem}</div>}
      <hr></hr>
    </div>
  );
};

export default View;
