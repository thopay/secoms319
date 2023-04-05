import React, { useState } from 'react';

const products = [
    {
        title: "Sun Glasses",
        price: 100.00,
        description: "Lorem ipsum.",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f"
    },
    {
        title: "Shoes",
        price: 60.00,
        description: "Fresh.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title: "Watch",
        price: 80.00,
        description: "Simple.",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
    },
    {
        title: "Headphones",
        price: 50.00,
        description: "Noise-cancelling.",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80"
    },
    {
        title: "Backpack",
        price: 45.00,
        description: "Water-resistant.",
        image: "https://images.unsplash.com/photo-1514524865930-188150490d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title: "Phone Case",
        price: 20.00,
        description: "Shock-proof.",
        image: "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
    },
]

const Catalog = (props) => {    
    const [quantities, setQuantities] = [props.quantities, props.setQuantities];
    
    const handleQuantityChange = (index, value) => {
        const newQuantities = [...quantities];
        newQuantities[index] = value;
        setQuantities(newQuantities);
    };

    const handleDecrement = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 0) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    };

    const handleIncrement = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    return (
    <div className="p-4" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
        {products.map((product, index) => (
            <div key={index} style={{padding: "10px", width: "300px"}}>
              <img className="w-full" src={product.image} alt={product.title} style={{height: "250px", objectFit: "cover"}} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">${product.price.toFixed(2)}</p>
                <p className="text-gray-700 text-base">{product.description}</p>
                <div className="flex items-center mt-4">
                  <button
                    className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l hover:bg-gray-400"
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </button>
                  <span className="bg-gray-300 text-gray-700 py-2 px-4">{quantities[index]}</span>
                  <button
                    className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r hover:bg-gray-400"
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
        ))}
    </div>
  );
};
export default Catalog;
