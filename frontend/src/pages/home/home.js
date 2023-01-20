import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {


    return (
        <>
        
            <div className="poster">
                <MovieList />
               
            </div>
                         
          
        </>
    )
}

export default Home