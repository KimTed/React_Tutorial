const React = require('react'),
      { Router,
        Route,
        IndexRoute,
        browserHistory
      } = require('react-router'),
      App = require('components/app/app.js'),
      Movies = require('components/movies/movies.js'),
      Movie = require('components/movie/movie.js');

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Movies} />
            <Route path="movies" component={Movies}>
                <Route path=":id" component={Movie} />
            </Route>
        </Route>
    </Router>
);