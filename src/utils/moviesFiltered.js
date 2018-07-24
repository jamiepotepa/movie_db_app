/*
Returns a filtered version of the Movies array based on any filters set by the user.
Both internal tests return true by default so all Movies are shown.
Takes in the Movies and Filter state.
*/
export default (movies, { genres: genresFilter, rating }) => {
    return movies.filter(({ genre_ids, vote_average }) => {
        // returns true if vote_average is greater than or equal to rating
        const voteAverage = vote_average >= rating ? true : false;
        let chosenGenre = true;

        // If the user has added any filter genres, iterate over and test each one is present
        // in the movies.genres_ids array
        if (genresFilter.length > 0) {
            chosenGenre = genresFilter.every(value => genre_ids.indexOf(value) >= 0);
        }
        return voteAverage && chosenGenre;
    });
};
