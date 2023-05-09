import React, { useState } from 'react';

function ProductsView() {
  const [product, setProduct] = useState({
    pid: '',
    title: '',
    price: '',
    description: '',
    image: '',
    seller_id: '',
    category: '',
  });

  const [removeProduct, setRemoveProduct] = useState({
    pid: ''
  });

  const [updateProduct, setUpdateProduct] = useState({
    pid: '',
    title: '',
    price: '',
    description: '',
    image: '',
    seller_id: '',
    category: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct(prevProduct => {
      return {
        ...prevProduct,
        [name]: value
      };
    });
  };

  const handleChangeRemove = (event) => {
    const { name, value } = event.target;
    setRemoveProduct(prevProduct => {
      return {
        ...prevProduct,
        [name]: value
      };
    });
  };

  const handleChangeUpdate = (event) => {
    const { name, value } = event.target;
    setUpdateProduct(prevProduct => {
      return {
        ...prevProduct,
        [name]: value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
      .then(response => {
        console.log(response);
      })
      .then(data => {
        console.log("New product added");
        console.log(data)
        window.alert("New product added!");
    })
      .catch(error => {
        console.log(error);
      });
  };

  const handleRemove = (event) => {
    event.preventDefault();
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return
    }
    fetch('http://localhost:4000/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(removeProduct)
    })
      .then(response => {
        console.log(response);
      })
      .then(data => {
        console.log("New product added");
        console.log(data)
        window.alert("Product Removed!")
    })
      .catch(error => {
        console.log(error);
      });
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateProduct)
    })
      .then(response => {
        console.log(response);
      })
      .then(data => {
        console.log("New product added");
        console.log(data)
        window.alert("Product updated!")
    })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchUpdate = () => {
    fetch(`http://localhost:4000/product/${updateProduct.pid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
      .then(response => response.json())
      .then(data => {
        setUpdateProduct({
          pid: data[0]._id,
          title: data[0].title,
          price: data[0].price,
          description: data[0].description,
          image: data[0].image,
          seller_id: data[0].seller_id,
          category: data[0].category,
        })
    })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className='flex w-full'>
      <div className="flex justify-center items-top bg-gray-200 w-1/3">
        <form className="bg-white p-6 rounded-lg shadow-md w-full m-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="pid">
              ID
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="pid"
              type="number"
              placeholder="Product ID"
              name="pid"
              value={product.id}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="title"
              type="text"
              placeholder="Product Title"
              name="title"
              value={product.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="price"
              type="number"
              placeholder="Product Price"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="description"
              placeholder="Product Description"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="image"
              type="text"
              placeholder="Product Image URL"
              name="image"
              value={product.image}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="seller_id">
              Seller ID
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="seller_id"
              type="number"
              placeholder="Seller ID"
              name="seller_id"
              value={product.seller_id}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Tops">Tops</option>
              <option value="Furniture">Furniture</option>
              <option value="Skate">Skate</option>
            </select>
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Add Product
          </button>
        </form>
      </div>
      <div className="flex justify-center items-top bg-gray-200 w-1/3">
        <form className="bg-white p-6 rounded-lg shadow-md w-full h-fit mt-6 mb-6" onSubmit={handleRemove}>
          <h2 className="text-2xl font-bold mb-4">Remove Product</h2>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="pid">
              ID
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="pid"
              type="number"
              placeholder="Product ID"
              name="pid"
              value={removeProduct.id}
              onChange={handleChangeRemove}
            />
          </div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Remove Product
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center h-full bg-gray-200 w-1/3">
        <form className="bg-white p-6 rounded-lg shadow-md w-full m-6" onSubmit={handleUpdate}>
          <h2 className="text-2xl font-bold mb-4">Update Product</h2>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="pid">
              ID
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="pid"
              type="number"
              placeholder="Product ID"
              name="pid"
              value={updateProduct.id}
              onChange={handleChangeUpdate}
            />
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={fetchUpdate}>
            Fetch Product
          </button>
          <div className="mb-4 w-full mt-3">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="title"
              type="text"
              placeholder="Product Title"
              name="title"
              value={updateProduct.title}
              onChange={handleChangeUpdate}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="price"
              type="number"
              placeholder="Product Price"
              name="price"
              value={updateProduct.price}
              onChange={handleChangeUpdate}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="description"
              placeholder="Product Description"
              name="description"
              value={updateProduct.description}
              onChange={handleChangeUpdate}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="image"
              type="text"
              placeholder="Product Image URL"
              name="image"
              value={updateProduct.image}
              onChange={handleChangeUpdate}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="seller_id">
              Seller ID
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="seller_id"
              type="number"
              placeholder="Seller ID"
              name="seller_id"
              value={updateProduct.seller_id}
              onChange={handleChangeUpdate}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="category"
              name="category"
              value={updateProduct.category}
              onChange={handleChangeUpdate}
            >
              <option value="">Select a category</option>
              <option value="Tops">Tops</option>
              <option value="Furniture">Furniture</option>
              <option value="Skate">Skate</option>
            </select>
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductsView;
