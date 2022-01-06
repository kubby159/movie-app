import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../scss/movie.scss";
function Movie({ id, coverImg, title, rating }) {
  return (
    <div className="movie-container">
      <h2 className="movie-title">
        <Link to={`/movie/${id}`}>{title} </Link>
      </h2>
      <div className="star"> ⭐️ {rating}</div>
      <div>
        <img className="movie-img" src={coverImg} />
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
