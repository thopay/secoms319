import React from 'react'; // Added useState import
import Filters from './Filters';
import { useState } from 'react'; // Added useState import

function ProductView({searchQuery, quantities, setQuantities, products, brandIndex }) {
    // This function decrements the quantity of a product at a given index
    const handleDecrement = (index) => {
        // Create a copy of the quantities array
        const newQuantities = [...quantities];
        // If the quantity is greater than 0, decrement it
        if (newQuantities[index] > 0) {
            newQuantities[index] -= 1;
            // Update the quantities state with the new array
            setQuantities(newQuantities);
        }
    };


    const handleIncrement = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const categories = [...new Set(products.map(product => product.category))];
    const brands = [...new Set(products.map(product => brandIndex[product.seller_id].title))];

    return (
        <div>
            <Filters categories={categories} brands={brands} setCategory={setCategory} setBrand={setBrand} />
            <div
                className="p-4"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {products.filter(product => product.title.toLowerCase().includes(searchQuery)).filter(
                    product => category === "" || product.category === category
                ).filter(
                    product => brand === "" || brandIndex[product.seller_id].title === brand
                ).map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        style={{ margin: "10px", width: "300px" }}
                    >
                        <img
                            className="w-full"
                            src={'http://localhost:4000' + product.image}
                            alt={product.title}
                            style={{ height: "250px", objectFit: "contain" }}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {product.title}
                            </div>
                            <div className="italic text-m mb-2">
                                {brandIndex[product.seller_id].title}
                            </div>
                            <p className="text-gray-700 text-base">
                                ${product.price.toFixed(2)}
                            </p>
                            <p className="text-gray-700 text-base">
                                {product.description}
                            </p>
                            <div className="flex items-center mt-4">
                                <button
                                    className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l hover:bg-gray-400"
                                    onClick={() => handleDecrement(index)}
                                >
                                    -
                                </button>
                                <span className="bg-gray-300 text-gray-700 py-2 px-4">
                                    {quantities[index]}
                                </span>
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
        </div>
    );
}

export default ProductView;


