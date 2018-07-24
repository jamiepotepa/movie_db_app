import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moviesFiltered from '../utils/moviesFiltered';

import { getMovieData } from '../actions/movieActions';

import MovieFilters from './MovieFilters';
import Movie from './Movie';
import Navbar from './Navbar';

class Movies extends Component {
    componentDidMount() {
        // MAKE OUR API CALLS IF STATE IS EMPTY
        if (this.props.movies.length < 1 && this.props.genres.length < 1) {
            this.props.getMovieData();
        }
    }

    render() {
        const movies = this.props.movies;
        const genres = this.props.genres;

        let displayContent;

        // MAKE SURE WE HAVE OUR STATE IN PLACE BEFORE TRYING TO RENDER ANYTHING
        if (movies.length < 1 || genres.length < 1) {
            displayContent = (
                <div className="col-sm-8 col-md-9 col-lg-9 pt-4">
                    <div className="alert alert-warning">No Movies To Show</div>
                </div>
            );
        } else {
            displayContent = (
                <Fragment>
                    <div className="col-sm-8 col-md-9 col-lg-9 pt-4">
                        <div className="row">
                            {movies.map(movie => {
                                return <Movie key={movie.id} movieData={movie} />;
                            })}
                        </div>
                    </div>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <Navbar />
                <div className="container-fluid" style={{ maxWidth: '1400px' }}>
                    <div className="row">
                        <MovieFilters />
                        {displayContent}
                    </div>
                </div>
            </Fragment>
        );
    }
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
    getMovieData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    // We return a filtered version of the movies array based on user set filters
    const visibleMovies = moviesFiltered(state.movies.movies, state.filters);

    return {
        movies: visibleMovies,
        genres: state.genres.genres
    };
};

export default connect(
    mapStateToProps,
    { getMovieData }
)(Movies);
