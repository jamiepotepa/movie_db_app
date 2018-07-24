import { SET_GENRES } from '../actions/types';

const genreReducerInitialState = {
    genres: []
};

const genresReducer = (state = genreReducerInitialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {
                ...state,
                genres: action.payload
            };
        default:
            return state;
    }
};

export default genresReducer;
