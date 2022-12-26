import React from "react";

const Navbar = () => {
    let imgPokeAPI = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return(
        <nav>
            <img src={imgPokeAPI}/>
        </nav>
    )
}

export default Navbar