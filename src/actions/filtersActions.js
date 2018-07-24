import { ADD_FILTER_BY_GENRE, REMOVE_FILTER_BY_GENRE, ADJUST_RATING } from './types';
export function addGenreFilter(genre) {
    return {
        type: ADD_FILTER_BY_GENRE,
        payload: genre
    };
}

export function removeGenreFilter(genre) {
    return {
        type: REMOVE_FILTER_BY_GENRE,
        payload: genre
    };
}

export function adjustRating(rating) {
    return {
        type: ADJUST_RATING,
        payload: rating
    };
}
