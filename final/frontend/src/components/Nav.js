import React from 'react';

function Nav({searchQuery, setSearchQuery, handleCheckoutClick, pageView, clearInfo, handleBrowseClick, handleAddProductClick}) {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-6">
        <div className="flex items-center">
            <div className="flex items-center">
                {pageView === 0 && <input
                    type="text"
                    id="search"
                    placeholder="Search"
                    className="rounded-lg p-2 text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />}
            </div>
        </div>
        <div className="flex items-center">
            {pageView === 0 && (
                <>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mr-4" onClick={handleAddProductClick}>
                      Add Product
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleCheckoutClick}>
                      Checkout
                  </button>
                </>
            )}
            {(pageView === 1 || pageView === 2) && (
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => { 
                    if (pageView === 2) {
                        clearInfo(); 
                    }
                    handleBrowseClick(); }}>
                    Back to Browse
                </button>
            )}
        </div>
    </nav>
  );
}

export default Nav;
