import React from "react";
import { Link } from "react-router-dom";
import "../../styles/P404.css";

function Error () {
    return (
        <div className="p404">
            <div className="p404-title">
                <h1>404</h1>
                    <p>
                        <span>Oups! La page que </span>vous demandez n'existe pas.
                    </p>
            </div>
            <Link to ="/" className="link-acceuil-404">
                Retournez sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error;