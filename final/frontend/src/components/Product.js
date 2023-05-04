import React, { useState } from 'react';

function Product(props) {
  const handleDecrement = () => {
    const newValue = props.quantity[props.index] - 1;
    props.handleQuantityChange(props.index, newValue);
  };

  const handleIncrement = () => {
    const newValue = props.quantity[props.index] + 1;
    props.handleQuantityChange(props.index, newValue);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={props.image} alt={props.title} style={{height: "250px", objectFit: "cover"}} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">${props.price.toFixed(2)}</p>
        <p className="text-gray-700 text-base">{props.description}</p>
        <div className="flex items-center mt-4">
          <button
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l hover:bg-gray-400"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="bg-gray-300 text-gray-700 py-2 px-4">{props.quantity[props.index]}</span>
          <button
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r hover:bg-gray-400"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
