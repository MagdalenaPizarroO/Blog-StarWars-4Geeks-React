import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const FavoritesDropdown = () => {
    const { store, actions } = useContext(Context);

    const filteredFavorites = store.favorites.filter(favorite => favorite !== "");  //también lo agregué para eliminar elementos vacíos qe impiden que aparezca el mensaje Add favorites here (continúa desde flux)

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                Favorites
            </button>
            <ul className="dropdown-menu dropdown-menu-end me-4">
                {filteredFavorites.length > 0 ? (
                    filteredFavorites.map((character, index)=>{
                        return (
                            <li key={index} className="dropdown-item justify-content-between d-flex">
                                <div className="me-auto">{character}</div>
                                <div className="btn btn-light btn-sm ms-auto" onClick={()=>actions.removeFavories(index)}>X</div>
                            </li>
                        );
                    })
                ) : (<li className="dropdown-item">Click on the ♥︎ to add favorites!</li>)
                }               
            </ul>
        </div>
    )
}