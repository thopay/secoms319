import React, { useState, useEffect } from "react";
import ProductView from "./components/ProductView";
import CheckoutView from "./components/CheckoutView";
import OrderConfirmationView from "./components/OrderConfirmationView";
import Nav from "./components/Nav";

const App = () => {
    const [products, setProducts] = useState([])
    const [quantities, setQuantities] = useState(
        Array(products.length).fill(0)
    );

    const [brandIndex, setBrandIndex] = useState({});

    // Fetch brands from backend
    useEffect(() => {
        fetch("http://localhost:4000/sellers")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((brand) => {
                    setBrandIndex((brandIndex) => ({
                        ...brandIndex,
                        [brand._id]: brand,
                    }));
                }
                );
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setQuantities(Array(data.length).fill(0))
            });
    }, []);


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

    // Update pageView state to "order confirmation" when the Checkout button is clicked
    const handleOrderConfirmationClick = () => {
        setPageView(2);
    };

    // Update pageView state to "order confirmation" when the Checkout button is clicked
    const handleBrowseClick = () => {
        setSearchQuery("");
        setPageView(0);
    };

    const clearInfo = (resetCart = 0) => {
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
        if (resetCart) {
            setQuantities(Array(products.length).fill(0));
        }
    };

        // Update pageView state to "checkout" when the Checkout button is clicked
        const handleCheckoutClick = () => {
            if (quantities.reduce((a, b) => a + b, 0) > 0) {
                setPageView(1);
            } else {
                alert("Please add items to your cart before checking out.");
            }
        };

    if (pageView === 0) {
        // Product View
        return (
            <>
                <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleCheckoutClick={handleCheckoutClick} pageView={pageView} clearInfo={clearInfo} handleBrowseClick={handleBrowseClick} />
                <ProductView searchQuery={searchQuery} quantities={quantities} setQuantities={setQuantities} products={products} brandIndex={brandIndex}/>
            </>
        );
    } else if (pageView === 1) {
        // Checkout View
        return (
            <>
                <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleCheckoutClick={handleCheckoutClick} pageView={pageView} clearInfo={clearInfo} handleBrowseClick={handleBrowseClick} />
                <CheckoutView 
                    products={products}
                    quantities={quantities}
                    setQuantities={setQuantities}
                    fullName={fullName}
                    setFullName={setFullName}
                    emailError={emailError}
                    email={email}
                    setEmail={setEmail}
                    setEmailError={setEmailError}
                    creditCard={creditCard}
                    setCreditCard={setCreditCard}
                    creditCardError={creditCardError}
                    setCreditCardError={setCreditCardError}
                    address1={address1}
                    setAddress1={setAddress1}
                    address2={address2}
                    setAddress2={setAddress2}
                    city={city}
                    setCity={setCity}
                    state={state}
                    setState={setState}
                    zipCode={zipCode}
                    setZipCode={setZipCode}
                    zipCodeError={zipCodeError}
                    setZipCodeError={setZipCodeError}
                    handleOrderConfirmationClick={handleOrderConfirmationClick}
                />
            </>
        );
    } else if (pageView === 2) {
        // Order Confirmation View
        return (
            <>
                <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleCheckoutClick={handleCheckoutClick} pageView={pageView} clearInfo={clearInfo} handleBrowseClick={handleBrowseClick} />
                <OrderConfirmationView 
                    clearInfo={clearInfo}
                    handleBrowseClick={handleBrowseClick}
                    products={products}
                    quantities={quantities}
                    fullName={fullName}
                    email={email}
                    address1={address1}
                    address2={address2}
                    city={city}
                    usStates={usStates}
                    state={state}
                    zipCode={zipCode}
                />
            </>
        );

    }
};

export default App;
