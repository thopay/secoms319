import React, { useState, useEffect } from 'react';

const Delete = () => {
  const [product, setProduct] = useState([]);
  const [idToDelete, setIdToDelete] = useState("");

  useEffect(() => { getAllProducts(); }, []);

  function getAllProducts() {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((data) => {
        console.log("Show Catalog of Products: ");
        console.log(data);
        setProduct(data);
      });
  }

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete product with id ${id}?`) === false) {
        return;
    }
    fetch(`http://localhost:4000/delete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Product with id ${id} deleted`);
        getAllProducts();
      })
      .catch((err) => console.log(err));
  };

  let showAllItems = product.filter(e => {
    if (idToDelete == null || idToDelete == "") { //eslint-disable-line
      return true;
    } else {
        return e._id == idToDelete; //eslint-disable-line
    }
  }).map((el) => {
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
        <button onClick={() => handleDelete(el._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-8">Catalog of Products</h1>

      <hr className="my-8" />
      <div className="my-8">
        <input
          type="text"
          placeholder="Enter ID to delete"
          value={idToDelete}
          onChange={(e) => setIdToDelete(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 mb-4"
        />
        <button
          onClick={() => handleDelete(idToDelete)}
          className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
      <hr className="my-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{showAllItems}</div>
      <hr className="my-8" />
    </div>
  );
};

export default Delete;

