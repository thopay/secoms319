import React, { useState } from 'react';

const Nav = ({ currentPage, setCurrentPage }) => {

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Assignment 03</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <p onClick={() => handleLinkClick("create")} className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:cursor-pointer mr-4 ${currentPage === "create" ? "text-white font-bold border-b-4 border-white" : "border-b-4 border-transparent"}`}>
            Create
          </p>
          <p onClick={() => handleLinkClick("view")} className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:cursor-pointer mr-4 ${currentPage === "view" ? "text-white font-bold border-b-4 border-white" : "border-b-4 border-transparent"}`}>
            View
          </p>
          <p onClick={() => handleLinkClick("update")} className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:cursor-pointer mr-4 ${currentPage === "update" ? "text-white font-bold border-b-4 border-white" : "border-b-4 border-transparent"}`}>
            Update
          </p>
          <p onClick={() => handleLinkClick("delete")} className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:cursor-pointer mr-4 ${currentPage === "delete" ? "text-white font-bold border-b-4 border-white" : "border-b-4 border-transparent"}`}>
            Delete
          </p>
          <p onClick={() => handleLinkClick("credits")} className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:cursor-pointer mr-4 ${currentPage === "credits" ? "text-white font-bold border-b-4 border-white" : "border-b-4 border-transparent"}`}>
            Credits
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

