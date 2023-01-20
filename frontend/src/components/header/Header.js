import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"



const Header = () => {


    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
           
            </div>
    
        </div>
    )
}

export default Header