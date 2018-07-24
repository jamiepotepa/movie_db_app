import { SET_MOVIES } from '../actions/types';

const movieReducerInitialState = {
    movies: []
};

const moviesReducer = (state = movieReducerInitialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
};

export default moviesReducer;
