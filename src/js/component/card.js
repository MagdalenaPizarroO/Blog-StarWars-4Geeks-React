import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
    const { store, actions } = useContext(Context)
   
    return (
        <div>
            {store.people.results?.map((character, index) => {
                return (
                    <div className="alert alert-primary">{character.name}</div>
                )
            })}
        </div>

    );
};

