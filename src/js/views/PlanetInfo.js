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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                hola
            <Link to={"/planets"} className="col justify-content-center">
                    <button className="btn btn-outline-warning ">Go Back</button>
                </Link>
            </div>
                
            
        </div>
    )
}
