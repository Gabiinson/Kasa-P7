import React from "react";
import logoFooter from "../assets/logoFooter.png";
import "../styles/Footer.css"

function Footer() {
    return (
        <footer>
            <img className="logofooter" src={logoFooter} alt= "logo de Kasa" />
            <div className="copyright">© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer;