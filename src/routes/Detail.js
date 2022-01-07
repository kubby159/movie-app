import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "../scss/detail.scss";
import Spinner from "../img/Spin-1s-200px.gif";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setmovieDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setmovieDetail([json.data.movie]);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieDetail);
  return (
    <div className="detail-container">
      <h1 className="detail-title">Detail</h1>

      {loading ? (
        <div className="loading">
          <img src={Spinner} />
        </div>
      ) : (
        <div className="detail-inner">
          <div className="detail-movie">
            {movieDetail.map((movie) => {
              return (
                <div className="detail-layout">
                  <div className="detail-movie-img">
                    <img src={movie.medium_cover_image} />
                  </div>
                  <div className="detail-movie-info">
                    <h2 className="detail-movie-title">Title: {movie.title}</h2>
                    {movie.genres.map((genre) => (
                      <span>Genres: {genre}&nbsp;</span>
                    ))}
                    <p> RunTime: {movie.runtime}</p>
                    <h2 className="detail-summary">Summary</h2>
                    <p className="detail-description">
                      {movie.description_intro}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
