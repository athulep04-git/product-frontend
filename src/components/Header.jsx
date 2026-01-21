import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar fluid className="bg-gray-900 shadow-lg px-4 py-2" rounded>
      <NavbarBrand as={Link} to="/" className="flex items-center gap-2">
        <span className="text-white text-lg font-semibold">
          <span className="font-bold text-xl">Products</span>
        </span>
      </NavbarBrand>
      <NavbarToggle className="text-white" />
      <NavbarCollapse>
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          <NavbarLink as={Link}to="/"className="text-white hover:text-gray-300">
            Home
          </NavbarLink>
        </div>
        
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
