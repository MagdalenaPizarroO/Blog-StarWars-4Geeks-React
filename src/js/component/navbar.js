import React from "react";
import logoNavbar from "../../img/logoNavbar.png"
import { Link } from "react-router-dom";
import { FavoritesDropdown } from "./dropdown";

export const Navbar = () => {
		return (
			<nav className="navbar mb-3" >
			  <div className="container ">
				<Link to="/">
				  <img src={logoNavbar} style={{ width: "60px" }} />
				</Link>
				<h1>StarWars BLOG!</h1>
				<div className="ml-auto">
				  <FavoritesDropdown/>
				</div>
			  </div>
			</nav>
		  );
};
