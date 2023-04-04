import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PlanetInfo = () => {
    const { store, actions } = useContext(Context);
    const param = useParams;

    const [planet, setPlanet] = useState([]);

    useEffect( () => {
        fetch(`https://swapi.dev/api/planets/${param.id}`)
        .then(resp => resp.json())
        .then(data => {setPlanet(data), console.log(data)})
        .catch(error => console.log(error));
    }, [])

    return (
        <div className="container-fluid">

            <div className="card mb-3 bg-dark border-warning" style={{ maxWidth:"540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={`${'https://starwars-visualguide.com/assets/img/planets/'}${planet?.uid}${".jpg"}`} className="card-img-top" alt={planet?.uid} 
                                onError={(e)=>{
                                    e.target.onerror=null; //para evitar loop infinito en caso de que el placeholder falle
                                    e.target.src = require('../../img/placeholder.jpg').default
                                }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: {planet?.name}</h5>
                            <p className="card-text">Climate: {planet?.climate}</p>
                            {/* <p className="card-text">Birth year: {character?.birth_year}</p>
                            <p className="card-text">Height: {character?.height}</p>
                            <p className="card-text">Mass: {character?.mass}</p>
                            <p className="card-text">Hair color: {character?.hair_color}</p>
                            <p className="card-text">Skin color: {character?.skin_color}</p>
                            <p className="card-text">Eye color: {character?.eye_color}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
