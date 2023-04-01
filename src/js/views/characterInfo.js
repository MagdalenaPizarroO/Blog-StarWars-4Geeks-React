import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterInfo = () => {
    const { store, actions } = useContext(Context)
   
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
                                    <p className="card-text">{character.url}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};