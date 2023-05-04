import React, { useState } from 'react'; // Added useState import

function ProductView({pageView, setPageView, quantities, setQuantities}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);
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
        console.log(newQuantities);
        setQuantities(newQuantities);
    };
    // Update pageView state to "checkout" when the Checkout button is clicked
    const handleCheckoutClick = () => {
        if (quantities.reduce((a, b) => a + b, 0) > 0) {
            setPageView(1);
        } else {
            alert("Please add items to your cart before checking out.");
        }
    };

    return (
        <div>
            <nav className="flex justify-between items-center bg-gray-800 text-white p-6">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <label htmlFor="search" className="mr-2">Search:</label>
                        <input
                            type="text"
                            id="search"
                            placeholder="iPhone"
                            className="rounded-lg p-2 text-black"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleCheckoutClick}>
                        Checkout
                    </button>
                </div>
            </nav>
            <div
                className="p-4"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {products.filter(product => product.title.toLowerCase().includes(searchQuery)).map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        style={{ margin: "10px", width: "300px" }}
                    >
                        <img
                            className="w-full"
                            src={product.image}
                            alt={product.title}
                            style={{ height: "250px", objectFit: "cover" }}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {product.title}
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


