import React from 'react';
function Filters({categories = [], brands = [], setCategory, setBrand}) {
  return (
    <div className="w-full flex justify-center bg-gray-200 p-3 m-0">
      <div className="w-1/2 flex justify-between items-center">
        <div className=" px-2 py-1 rounded">Filters:</div>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Category</option>
            {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z"/></svg>
          </div>
        </div>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setBrand(e.target.value)}>
            <option value="">Brand</option>
            {brands.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;

