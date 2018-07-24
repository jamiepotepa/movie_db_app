import axios from 'axios';

import { SET_MOVIES, SET_GENRES } from './types';

const API_KEY = 'e12effc64b0892643e4d23cb1fa36bd3';

export const getMovieData = () => {
    return (dispatch, getState) => {
        // Get films
        const getMovies = () =>
            axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&append_to_response=videos&language=en-UK&sort_by=popularity.asc&page=1`
            );

        // Get genres
        const getGenres = () =>
            axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
            );

        // Wait for both calls and then add data to our state
        axios
            .all([getMovies(), getGenres()])
            .then(
                axios.spread((movies, genres) => {
                    dispatch(setMovies(movies.data.results));
                    dispatch(setGenres(genres.data.genres));
                })
            )
            .catch(err => console.log(err));
    };
};

export function setMovies(movies) {
    return {
        type: SET_MOVIES,
        payload: movies
    };
}

export function setGenres(genres) {
    return {
        type: SET_GENRES,
        payload: genres
    };
}
