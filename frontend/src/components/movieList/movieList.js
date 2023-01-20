import React, { useEffect, useState } from "react"
import "./movieList.css"
import { useParams, Link } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])
    // http://localhost:4001/api/v1/GetAllMovies/
    const deleteData = (e) => {
        console.log(e.id)
        fetch(`http://localhost:4001/api/v1/DeleteMovie/${e.id}`, { method: 'DELETE' })
            .then(() => this.setState({ status: 'Delete successful' }));
            window.location.reload(true)
    }
    const getData = () => {
        fetch(`http://localhost:4001/api/v1/GetAllMovies/`)
            .then(res => res.json())
            .then((result) => {
                console.log(result.data);
                setMovieList(result.data)
            })
    }
    return (
        <div className="movie__list">
            <h2><Link to="/AddMovie/"><span> Add Movie</span></Link> </h2>
            <h1>Movies Detail</h1><br></br>

            <table>
                <tr>
                    <td>MovieName</td>
                    <td>ProducerName</td>
                    <td>Actors</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>

                {
                    movieList.map(movie => (
                        // <Cards movie={movie} />
                        <tr>
                            <td>{movie.name}</td>
                            <td>{
                                movie.producerDetail != null && (
                                    <span>{movie.producerDetail.name}</span>
                                )
                            }</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            {movie.actorsList.length != 0 && (<span>

                                {
                                    movie.actorsList.map(item => (
                                        <td>
                                            {item.name}&nbsp;&nbsp;&nbsp;&nbsp;
                                        </td>
                                    ))
                                }
                            </span>)}
                            <td><Link to={{
                                pathname: `/UpdateMovie/${movie.id}`,
                                state: { data: movie }
                            }}
                            >
                                <button>Update</button>
                            </Link></td>
                            <td><button onClick={() => deleteData(movie)}> Delete </button></td>

                        </tr>
                    ))
                }

            </table>
            <div class="row">





            </div>

        </div>
    )
}

export default MovieList