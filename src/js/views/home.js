import React, {useContext} from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import homeimg from "../../img/homeimg.jpeg"
import peopleHome from "../../img/peopleHome.jpeg"

export const Home = () => {
	const {store, actions} = useContext(Context)
	return (
		<div className="container text-center mt-5" >
		<h1>StarWars BLOG!</h1>
		<p>
			<img src={homeimg} style={{ width: "700px" }} />
		</p>
		<div className="row">
			<Link className="col" to="/people">
				<img src={peopleHome} style={{ width: "300px" , height: "200px"}} />
				<p>Click here to view characters info</p>
			</Link>
			
		</div>
	</div>
);}
