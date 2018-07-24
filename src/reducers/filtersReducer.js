import {
    ADD_FILTER_BY_GENRE,
    REMOVE_FILTER_BY_GENRE,
    ADJUST_RATING
} from '../actions/types';

const filtersReducerInitialState = {
    genres: [],
    rating: 3
};

const filtersReducer = (state = filtersReducerInitialState, action) => {
    switch (action.type) {
        case ADD_FILTER_BY_GENRE:
            return {
                ...state,
                genres: [...state.genres, action.payload]
            };
        case REMOVE_FILTER_BY_GENRE:
            return {
                ...state,
                genres: state.genres.filter(genre => genre !== action.payload)
            };
        case ADJUST_RATING:
            return {
                ...state,
                rating: action.payload
            };
        default:
            return state;
    }
};

export default filtersReducer;
