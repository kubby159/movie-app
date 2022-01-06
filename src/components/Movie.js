import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <h2><Link to={`/movie/${id}`} >{title}</Link></h2>
      <img src={coverImg} />
      
      {/* <p>{summary}</p>
      {genres !== undefined ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null} */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;
