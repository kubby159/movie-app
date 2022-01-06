import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          {movieDetail.map((movie) => {
            return (
              <div>
                <h2>{movie.title}</h2>
                {movie.genres.map((genre) => (
                  <div>{genre}</div>
                ))}
                <p>{movie.description_intro}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Detail;
