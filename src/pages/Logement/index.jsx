import React, {useEffect} from "react";
import { useNavigate, useParams} from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Description from "../../components/Description";
import JSON from "../../JSON/Logement.json";
import "../../styles/Logement.css"
import "../../styles/Collapse.css"

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate ();
    const logApparts = JSON.filter (function (logement) {
        return logement.id === id;
    })

    useEffect (() => {
        if (logApparts.length === 0) {
            navigate ("*")
        }
    },);

    return (
        <section class='logement'>
        <div className="location">
            {logApparts.map(
        ({
            id, title, pictures, description, host, rating, location, equipments, tags,
        }) => (
            <div key={`description-${id}`}>
                <Slideshow pictures={pictures} />
                <Description
                    description={description}
                    equipments={equipments}
                    host={host}
                    id={id}
                    location={location}
                    rating={rating}
                    tags={tags}
                    title={title}
                />
            </div>
            )
        )}
        </div>
        </section>
    )
}

export default Logement;