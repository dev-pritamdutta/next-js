import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg">
        <ul className="flex flex-col md:flex-row justify-between items-center p-4 md:px-20">
          <li className="mb-2 md:mb-0">
            <Link href="/">
              <span className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">
                Home
              </span>
            </Link>
          </li>
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <Link href="/products">
                <span className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">
                  Products
                </span>
              </Link>
            </li>
            <li>
              <Link href="/products/add">
                <span className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">
                  Add Product
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <span className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">
                  Service
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">
                  About
                </span>
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
