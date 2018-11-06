const FETCH_MOVIES = 'movies/FETCH_MOVIES',
      FETCH_MOVIE = 'movies/FETCH_MOVIE',
      initialState = {
        movies: [],
        movie: {}
      },
      {handleActions} = require('redux-actions');

/*
//switch case문은 나쁜 방식
function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                all: action.movies
            };
        case FETCH_MOVIE:
            return {
                ...state,
                current: action.movie
            };
    }
}

module.exports = {reducer};
*/

module.exports = {
    fetchMoviesActionCreator: (movies) => ({
        type: FETCH_MOVIES,
        movies
    }),
    fetchMovieActionCreator: (index) => ({
        type: FETCH_MOVIE,
        index
    }),
    reducer: handleActions({
        [FETCH_MOVIES]: (state, action) => ({
            ...state,
            all: action.movies
        }),
        [FETCH_MOVIE]: (state, action) => ({
            ...state,
            current: state.all[action.index - 1]
        })
    }, initialState)
}