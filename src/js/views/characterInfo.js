import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const CharacterInfo = () => {
    const { store, actions } = useContext(Context)
    const param = useParams()
    return (
        <div className="container-fluid">

            <div className="card mb-3 bg-dark border-warning" style={{ maxWidth:"540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${'https://starwars-visualguide.com/assets/img/characters/'}${param.id}${".jpg"}`} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};