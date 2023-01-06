import React from "react";

const Navbar = () => {
    let imgPokeAPI = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return(
        <nav>
            <div>
                <img src={imgPokeAPI} alt="pokeapi-logo" className="navbar-image"/>
            </div>
            <div>
                Here
            </div>
        </nav>
    )
}

export default Navbar