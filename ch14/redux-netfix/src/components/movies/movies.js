const {
        fetchMoviesActionCreator
      } = require('modules/movies.js');

class Movies extends Component {
    componentWillMount() {
        this.props.fetchMovies()
    }

    module.exports = connect(state => ({
        movies: state.movies.all
    }), {fetchMoviesActionCreator})(Movies)
}