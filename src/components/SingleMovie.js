import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const SingleMovie = props => {
    const { title, backdrop_path, overview, release_date, vote_average } = props.movie;

    const divStyle = {
        background: `url(${BACKDROP_PATH}${backdrop_path})`,
        backgroundSize: 'cover',
        height: '60vh',
        width: '100%'
    };

    return (
        <Fragment>
            <div style={divStyle} />
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div className="row">
                    <div
                        className="col col-sm-10 col-md-8 mx-auto bg-white p-5 rounded-top shadow-sm"
                        style={{ marginTop: '-200px' }}
                    >
                        <h1 className="mb-3">{title}</h1>
                        <p className="mb-3">{overview}</p>
                        <div className="bg-light p-2 border mb-4">
                            <p>
                                <span className="font-weight-bold">Release Date:</span>{' '}
                                {release_date}
                            </p>
                            <p className="m-0">
                                <span className="font-weight-bold">Vote Average: </span>
                                {vote_average}
                            </p>
                        </div>
                        <Link className="btn w-100 btn-primary" to="/">
                            Back to Movies
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

SingleMovie.propTypes = {
    movie: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
    movie: state.movies.movies.find(movie => movie.id === parseInt(props.match.params.id))
});

export default connect(mapStateToProps)(SingleMovie);
