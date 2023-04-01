import React, {useContext} from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const {store, actions} = useContext(Context)
	return (
	<div className="text-center mt-5">
		<h1>Debería aparecer el nombre: {store.people.name} {store.people.lastname}</h1>
		< Card />
	</div>
);}
