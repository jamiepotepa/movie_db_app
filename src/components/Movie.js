import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w200/';

const Movie = ({ movieData, genres }) => {
    const { id, title, poster_path, genre_ids } = movieData;
    return (
        <div className="col col-sm-6 col-md-4 col-xl-3">
            <div className="card mb-4">
                <img
                    src={`${POSTER_PATH}${poster_path}`}
                    style={{ width: '100%', height: 'auto' }}
                    alt={`${title} poster`}
                />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <div className="card-text mb-2">
                        {genre_ids.map(id => {
                            const genre = genres.find(genre => genre.id === id);
                            return (
                                <p
                                    className="m-0 d-inline-block p-1 border rounded bg-light mr-1 mb-1 font-weight-light small"
                                    key={genre.id}
                                >
                                    {genre.name}
                                </p>
                            );
                        })}
                    </div>
                    <Link className="btn w-100 btn-primary" to={`/movie/${id}`}>
                        More Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
    movieData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    genres: state.genres.genres
});

export default connect(mapStateToProps)(Movie);
