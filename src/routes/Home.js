import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "../scss/home.scss";
import Spinner from "../img/Spin-1s-200px.gif";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoives] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();

    setMoives(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home-container">
      <div className="home-layout">
        <div className="home-nav">
          <p className="home-main-title">funny movies</p>
        </div>
        <div className="home-info">
          {loading ? (
            <img src={Spinner} className="loading" />
          ) : (
            <div>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  rating={movie.rating}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
