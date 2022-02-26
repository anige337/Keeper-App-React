import React from "react";

function Footer () {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
        <p>
            Copyright © 2022 Angelike Nunez {currentYear}
        </p> 
        </footer>
        
    )
}

export default Footer;