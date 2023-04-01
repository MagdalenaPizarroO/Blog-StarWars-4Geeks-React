import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const CharacterInfo = () => {
    const { store, actions } = useContext(Context)
    const param = useParams()

    const [character, setCharacter] = useState([]);
    
    useEffect( () => {
        fetch(`https://swapi.dev/api/people/${param.id}`)
            .then(resp => resp.json())
            .then(data => setCharacter(data)) 
            .catch((error) => console.log(error));
    }, [])

    return (
        <div className="container-fluid">

            <div className="card mb-3 bg-dark border-warning" style={{ maxWidth:"540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${'https://starwars-visualguide.com/assets/img/characters/'}${param.id}${".jpg"}`} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: {character?.name}</h5>
                            <p className="card-text">Gender: {character?.gender}</p>
                            <p className="card-text">Birth year: {character?.birth_year}</p>
                            <p className="card-text">Height: {character?.height}</p>
                            <p className="card-text">Mass: {character?.mass}</p>
                            <p className="card-text">Hair color: {character?.hair_color}</p>
                            <p className="card-text">Skin color: {character?.skin_color}</p>
                            <p className="card-text">Eye color: {character?.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

