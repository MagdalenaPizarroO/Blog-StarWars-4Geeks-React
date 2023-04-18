import React, { useContext, useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PlanetInfo = () => {
    const { store, actions } = useContext(Context);
    const param = useParams();

    const [planet, setPlanet] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${param.id}`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                if (data !== undefined) {
                    setPlanet(data);
                } else { console.log('Response was undefined') }
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="container-fluid  justify-content-center">
            <div className="row justify-content-center">
                <div className="card mb-3 bg-dark border-warning" style={{ maxWidth: "540px" }}>
                    <div className="row g-0 ">
                        <div className="col-md-4">
                            <img src={`${'https://starwars-visualguide.com/assets/img/planets/'}${param.id}${".jpg"}`} className="card-img-top" alt={planet?.uid}
                                onError={(e) => {
                                    e.target.onerror = null; //para evitar loop infinito en caso de que el placeholder falle
                                    e.target.src = require('../../img/placeholder.jpg').default
                                }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Name: {planet?.name}</h5>
                                <p className="card-text">Climate: {planet?.climate}</p>
                                <p className="card-text">Rotation period: {planet?.rotation_period}</p>
                                <p className="card-text">Orbital period: {planet?.orbital_period}</p>
                                <p className="card-text">Diameter: {planet?.diameter}</p>
                                <p className="card-text">Gravity: {planet?.gravity}</p>
                                <p className="card-text">Population: {planet?.population}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" d-flex justify-content-evenly">
                <Link to={"/"} className="">
                    <button className="btn btn-outline-warning ">Back Home</button>
                </Link>
                <Link to={"/planets"} className="">
                    <button className="btn btn-outline-warning ">Back to planets</button>
                </Link>
            </div>


        </div>
    )
}
