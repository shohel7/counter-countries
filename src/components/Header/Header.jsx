import React from "react";

const Header = () => {
  return (
    <nav nav className="bg-amber-500 py-6">
      <ul className="flex justify-center gap-14 text-xl text-white font-semibold">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/home">About Us</a>
        </li>
        <li>
          <a href="/home">Contact Us</a>
        </li>
        <li>
          <a href="/home">Countries</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
