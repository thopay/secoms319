import React from 'react';

function CheckoutView({
        handleBrowseClick, 
        products, 
        quantities, 
        fullName, 
        setFullName, 
        emailError,
        email,
        setEmail,
        setEmailError,
        creditCard,
        setCreditCard,
        creditCardError,
        setCreditCardError,
        address1,
        setAddress1,
        address2,
        setAddress2,
        city,
        setCity,
        state,
        setState,
        zipCode,
        setZipCode,
        zipCodeError,
        setZipCodeError,
        handleOrderConfirmationClick,
    }) {
    
    return (
        <div>
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
                            <th className="px-4 py-2 text-right">Price</th>
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
                                            src={'http://localhost:4000' + product.image}
                                            alt={product.title}
                                            style={{ height: "125px", width: "125px", objectFit: "contain" }}
                                        />
                                    </td>
                                    <td className="border px-4 py-2">{product.title}</td>
                                    <td className="border px-4 py-2">{quantities[index]}</td>
                                    {quantities[index] > 1 ? (
                                        <td className="border px-4 py-2 text-right">{quantities[index]} x ${product.price.toFixed(2)} = ${(product.price * quantities[index]).toFixed(2)}</td>
                                    ) : (
                                        <td className="border px-4 py-2 text-right">${product.price.toFixed(2)}</td>
                                    )}
                                </tr>
                            )
                        ))}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="border px-4 py-2 text-right">Sales Tax (6.25%): ${(products.reduce((total, product, index) => total + (quantities[index] * product.price), 0) * 0.0625).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="border px-4 py-2 font-bold text-right">Total: ${(products.reduce((total, product, index) => total + (quantities[index] * product.price), 0) * 1.0625).toFixed(2)}</td>
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
                        onClick={(e) => { e.preventDefault(); handleOrderConfirmationClick() }}>
                        <span>Submit Order</span>
                        <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutView;
