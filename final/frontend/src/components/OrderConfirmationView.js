import React from 'react';

function OrderConfirmationView({
        clearInfo,
        handleBrowseClick,
        products,
        quantities,
        fullName,
        email,
        address1,
        address2,
        city,
        usStates,
        state,
        zipCode,
    }) {
    return (
        <div>
            <div className="flex justify-center items-center p-10">
                <div className="bg-white p-8 rounded shadow-2xl w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
                    <table className="w-full mb-4">
                        <thead>
                            <tr>
                                <th className="text-left py-2">Item</th>
                                <th className="text-left py-2">Name</th>
                                <th className="text-left py-2">Quantity</th>
                                <th className="text-right py-2">Price</th>
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
                    <div className="mb-4">
                        <p className="font-bold">Customer Information:</p>
                        <p>{fullName}</p>
                        <p>{email}</p>
                        <p>{address1}</p>
                        {address2 && <p>{address2}</p>}
                        <p>{city}, {usStates[state - 1]} {zipCode}</p>
                    </div>
                    <button
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                        onClick={() => { clearInfo(); handleBrowseClick(); }}
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

export default OrderConfirmationView;

