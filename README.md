## Overview

The app is built using create-react-app, React-router, Redux to manage state and bootstrap for some simple UI. It displays the latest 20 "now playing" movies that are sorted by their popularity and filterable by genre and rating. Clicking "More Details" displays a single view of the movie with some further information.

### My Solution

The app makes two initial api calls to obtain the latest movies and genres. The results are stored in redux along with a filters object that holds any selected genres and results from the rating slider.

The movies displayed on the index page are passed through a function (moviesFiltered) that filters the results based on the users selected filters. This function is called inside mapStateToProps in the Movies component.

### Redux state:

movies.movies - Array of movie objects.
genres.genres - Array of genre objects.
filters.genres - Array used to hold the users selected genres.
filters.rating - Number obtained from the rating slider.

## Instructions

Clone the repository and run `npm install`. You can then run the following commands:

`npm run dev-server` - local dev server.

`npm build:dev` - dev build.

`npm build:prod` - production build.

`npm start` - node server with express to test produciton build.

View a [DEMO](https://jp-movie-db.netlify.com) here.
