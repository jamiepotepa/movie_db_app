import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import genreReducer from './genreReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    filters: filtersReducer
});
