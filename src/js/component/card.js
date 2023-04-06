import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Planets } from "../views/planets";

export const CardPeople = () => {
    const { store, actions } = useContext(Context)
    //hacer fetch aquí a la .dev, almacenar la info en un useState 
    return (
        <div className="container-fluid">
            <div className="row">
                {store.peopleUID.results?.map((character, index) => {
                    return (
                        <div className="col-md-4 mb-4" key={character.uid}>
                            <div className="card bg-dark border-warning" style={{ width: "18rem" }}>
                                <img src={`${'https://starwars-visualguide.com/assets/img/characters/'}${character.uid}${".jpg"}`} className="card-img-top" alt={character.uid} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{character.name}</h5>
                                    <Link to={"/character/" + character.uid}>
                                        <button className="btn btn-outline-warning">More info</button>
                                    </Link>
                                    <button className="btn btn-dark" onClick={() => actions.addToFavorites(character.name)}><i className="text-danger fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export const CardPlanets = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="container-fluid">
            <div className="row">
                <p>Hola</p>
                {store.planetsUID.results?.map((planet, index) => {
                    return (
                        console.log(planet),
                        <div className="col-md-4 mb-4" key={planet.uid}>
                            <div className="card bg-dark border-warning" style={{ width: "18rem" }}>
                                <img src={`${'https://starwars-visualguide.com/assets/img/planets/'}${planet.uid}${".jpg"}`} className="card-img-top" alt={planet.uid}
                                    onError={(e) => {
                                        e.target.onerror = null; //para evitar loop infinito en caso de que el placeholder falle
                                        e.target.src = require('../../img/placeholder.jpg').default
                                    }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{planet.name}</h5>
                                    <Link to={"/planet/" + planet.uid}>
                                        <button className="btn btn-outline-warning">More info</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

