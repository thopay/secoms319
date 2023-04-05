import React, { useState } from "react";

const products = [
    {
        title: "Sun Glasses",
        price: 100.0,
        description: "Lorem ipsum.",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    },
    {
        title: "Shoes",
        price: 60.0,
        description: "Fresh.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
        title: "Watch",
        price: 80.0,
        description: "Simple.",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    },
    {
        title: "Headphones",
        price: 50.0,
        description: "Noise-cancelling.",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80",
    },
    {
        title: "Backpack",
        price: 45.0,
        description: "Water-resistant.",
        image: "https://images.unsplash.com/photo-1514524865930-188150490d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    },
    {
        title: "Camera",
        price: 250.0,
        description: "DSLR.",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
];

const App = () => {
    const [quantities, setQuantities] = useState(
        Array(products.length).fill(0)
    );



// Add an array of US states
const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];


    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [creditCard, setCreditCard] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState(0);
    const [zipCode, setZipCode] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [creditCardError, setCreditCardError] = useState(false);
    const [zipCodeError, setZipCodeError] = useState(false);

    // Add state for the search bar
    const [searchQuery, setSearchQuery] = useState("");


    const [pageView, setPageView] = useState(0); // Initialize pageView state to 0 = "catalog" 
    
    // Update pageView state to "checkout" when the Checkout button is clicked
    const handleCheckoutClick = () => {
        setPageView(1);
    };
    
    // Update pageView state to "order confirmation" when the Checkout button is clicked
    const handleOrderConfirmationClick = () => {
        setPageView(2);
    };

    // Update pageView state to "order confirmation" when the Checkout button is clicked
    const handleBrowseClick = () => {
        setSearchQuery("");
        setPageView(0);
    };

    const clearInfo = () => {
        setFullName("");
        setEmail("");
        setCreditCard("");
        setAddress1("");
        setAddress2("");
        setCity("");
        setState(0);
        setZipCode("");
        setEmailError(false);
        setCreditCardError(false);
        setZipCodeError(false);
        setQuantities(Array(products.length).fill(0));
    };

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

    if (pageView === 0) {
        
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
    } else if (pageView === 1) {

        return (
            <div>
                <nav className="flex justify-between items-center bg-gray-800 text-white p-6">
                    <div className="flex items-center">
                        <div className="flex items-center">
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleBrowseClick}>
                            Back to Browse
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
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Item</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                // Only render the product if the quantity is greater than 1
                                quantities[index] >= 1 && (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">
                                            <img
                                                className="w-full"
                                                src={product.image}
                                                alt={product.title}
                                                style={{ height: "125px", width: "125px", objectFit: "cover" }}
                                            />
                                        </td>
                                        <td className="border px-4 py-2">{product.title}</td>
                                        <td className="border px-4 py-2">{quantities[index]}</td>
                                        {quantities[index] > 1 ? (
                                            <td className="border px-4 py-2">{quantities[index]} x ${product.price.toFixed(2)} = ${(product.price * quantities[index]).toFixed(2)}</td>
                                        ) : (
                                            <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
                                        )}
                                    </tr>
                                )
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="border px-4 py-2">Sales Tax (6.25%): ${(products.reduce((total, product, index) => total + (quantities[index] * product.price), 0) * 0.0625).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="border px-4 py-2 font-bold">Total: ${(products.reduce((total, product, index) => total + (quantities[index] * product.price), 0) * 1.0625).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>        
                </div>
                    <div className="w-full mt-4" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" style={{
                                width: "650px",
                        }}>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Information</h1>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                    id="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${emailError ? 'border-red-500' : ''}`}
                                    id="email"
                                    type="text"
                                    placeholder="john@gmail.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                                            setEmailError(true);
                                        } else {
                                            setEmailError(false);
                                        }
                                    }}
                                />
                                {emailError && <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creditCard">
                                    Credit Card
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${creditCardError ? 'border-red-500' : ''}`}
                                    id="creditCard"
                                    type="text"
                                    placeholder="XXXX-XXXX-XXXX-XXXX"
                                    value={creditCard}
                                    onChange={(e) => {
                                        setCreditCard(e.target.value);
                                        if (!/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/.test(e.target.value)) {
                                            setCreditCardError(true);
                                        } else {
                                            setCreditCardError(false);
                                        }
                                    }}
                                />
                                {creditCardError && <p className="text-red-500 text-xs italic">Please enter a valid credit card number in the format XXXX-XXXX-XXXX-XXXX.</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address1">
                                    Address 1
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                    id="address1"
                                    type="text"
                                    placeholder="1234 Main Street"
                                    value={address1}
                                    onChange={(e) => setAddress1(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address2">
                                    Address 2
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                    id="address2"
                                    type="text"
                                    placeholder="Apartment, Studio, or Floor"
                                    value={address2}
                                    onChange={(e) => setAddress2(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                    City
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                    id="city"
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                                    State
                                </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                id="state"
                                value={state}
                                onChange={(e) => setState(parseInt(e.target.value))}
                            >
                                <option value="0">Select State</option>
                                <option value="1">Alabama</option>
                                <option value="2">Alaska</option>
                                <option value="3">Arizona</option>
                                <option value="4">Arkansas</option>
                                <option value="5">California</option>
                                <option value="6">Colorado</option>
                                <option value="7">Connecticut</option>
                                <option value="8">Delaware</option>
                                <option value="9">District Of Columbia</option>
                                <option value="10">Florida</option>
                                <option value="11">Georgia</option>
                                <option value="12">Hawaii</option>
                                <option value="13">Idaho</option>
                                <option value="14">Illinois</option>
                                <option value="15">Indiana</option>
                                <option value="16">Iowa</option>
                                <option value="17">Kansas</option>
                                <option value="18">Kentucky</option>
                                <option value="19">Louisiana</option>
                                <option value="20">Maine</option>
                                <option value="21">Maryland</option>
                                <option value="22">Massachusetts</option>
                                <option value="23">Michigan</option>
                                <option value="24">Minnesota</option>
                                <option value="25">Mississippi</option>
                                <option value="26">Missouri</option>
                                <option value="27">Montana</option>
                                <option value="28">Nebraska</option>
                                <option value="29">Nevada</option>
                                <option value="30">New Hampshire</option>
                                <option value="31">New Jersey</option>
                                <option value="32">New Mexico</option>
                                <option value="33">New York</option>
                                <option value="34">North Carolina</option>
                                <option value="35">North Dakota</option>
                                <option value="36">Ohio</option>
                                <option value="37">Oklahoma</option>
                                <option value="38">Oregon</option>
                                <option value="39">Pennsylvania</option>
                                <option value="40">Rhode Island</option>
                                <option value="41">South Carolina</option>
                                <option value="42">South Dakota</option>
                                <option value="43">Tennessee</option>
                                <option value="44">Texas</option>
                                <option value="45">Utah</option>
                                <option value="46">Vermont</option>
                                <option value="47">Virginia</option>
                                <option value="48">Washington</option>
                                <option value="49">West Virginia</option>
                                <option value="50">Wisconsin</option>
                                <option value="51">Wyoming</option>
                            </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
                                    Zip Code
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${zipCodeError ? 'border-red-500' : ''}`}
                                    id="zipCode"
                                    type="text"
                                    placeholder="Zip Code"
                                    value={zipCode}
                                    onChange={(e) => {
                                        setZipCode(e.target.value);
                                        if (!/^\d{5}$/.test(e.target.value)) {
                                            setZipCodeError(true);
                                        } else {
                                            setZipCodeError(false);
                                        }
                                    }}
                                />
                                {zipCodeError && <p className="text-red-500 text-xs italic">Please enter a valid zip code.</p>}
                            </div>
                            <button 
                                type="button"
                                className={`bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center ${!fullName || !email || !creditCard || !address1 || !city || !zipCode || state === 0 || zipCodeError || creditCardError || emailError ? "disabled:opacity-25" : "hover:bg-green-700"}`}
                                    disabled={!fullName || !email || !creditCard || !address1 || !city || !zipCode || state === 0 || zipCodeError || creditCardError || emailError} 
                                onClick={(e) => {e.preventDefault(); handleOrderConfirmationClick()}}>
                                <span>Submit Order</span>
                                <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                </svg>
                            </button>
                       </form>
                    </div>
            </div>
    );
    } else if (pageView === 2) {

return (
    <div>
    <nav className="flex justify-between items-center bg-gray-800 text-white p-6">
                <div className="flex items-center">
                    <div className="flex items-center">
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => {clearInfo(); handleBrowseClick();}}>
                        Back to Browse
                    </button>
                </div>
            </nav>
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded shadow-2xl w-1/2">
                <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
                <table className="w-full mb-4">
                    <thead>
                        <tr>
                            <th className="text-left py-2">Item</th>
                            <th className="text-left py-2">Quantity</th>
                            <th className="text-left py-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                                // Only render the product if the quantity is greater than 1
                                quantities[index] >= 1 && (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">
                                            <img
                                                className="w-full"
                                                src={product.image}
                                                alt={product.title}
                                                style={{ height: "125px", width: "125px", objectFit: "cover" }}
                                            />
                                        </td>
                                        <td className="border px-4 py-2">{product.title}</td>
                                        <td className="border px-4 py-2">{quantities[index]}</td>
                                        {quantities[index] > 1 ? (
                                            <td className="border px-4 py-2">{quantities[index]} x ${product.price.toFixed(2)} = ${(product.price * quantities[index]).toFixed(2)}</td>
                                        ) : (
                                            <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
                                        )}
                                    </tr>
                                )
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="border px-4 py-2">Sales Tax (6.25%): ${(products.reduce((total, product, index) => total + (quantities[index] * product.price), 0) * 0.0625).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="border px-4 py-2 font-bold">Total: ${(products.reduce((total, product, index) => total + (quantities[index] * product.price), 0) * 1.0625).toFixed(2)}</td>
                            </tr>
                    </tbody>
                </table>
                <div className="mb-4">
                    <p className="font-bold">Customer Information:</p>
                    <p>{fullName}</p>
                    <p>{email}</p>
                    <p>{address1}</p>
                    {address2 && <p>{address2}</p>}
                    <p>{city}, {usStates[state-1]} {zipCode}</p>
                </div>
                <button 
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    onClick={() => {clearInfo(); handleBrowseClick();}}
                >
                    <span>Place Another Order</span>
                    <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    );

    }
};

export default App;
