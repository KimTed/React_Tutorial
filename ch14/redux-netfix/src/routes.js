const React = require('react'),
      { Router,
        Route,
        IndexRoute,
        browserHistory
      } = require('react-router'),
      App = require('components/App/app.js'),
      Movies = require('components/Movies/movies.js'),
      Movie = require('components/Movie/movie.js');

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