import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const apiKey = "0a7bdc5f7b44e6a5230c95a3dbb9bbbc"
// https://api.themoviedb.org/3/discover/movie?api_key=0a7bdc5f7b44e6a5230c95a3dbb9bbbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28
// /discover/movie?with_genres=35
export const SimilarMovies = () => {
  const [similar, setSimilar] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results)
        setSimilar(json.results)
      })
  }, [id])

  return (
    <section className="all-movies"> {/*Change this later to similar-movies */}
      {similar.map((movie) => (
        <div className="poster" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>

            {/* style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})` }}> */}
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
            <div className="title-release" key={movie.id}>
              <h1>{movie.title}</h1>
              <p>Released: {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))


      }
    </section>
  )

}