const React = require('react'),
      {connect} = require('react-redux'),
      {Link} = require('react-router'),
      movies = =require('../../movies.json'),
      {fetchMoviesActionCreator} = require('modules/movies.js'),
      styles = require('./movies.css');

class Movies extends Component {
    componentWillMount() {
        this.props.fetchMovies(movies);
    }

    render() {
        const {
                children,
                movies = [],
                params = {}
              } = this.props;

        return (
            <div className={styles.movies}>
                <div className={params.id ? styles.listHidden : styles.list}>
                    {movies.map((movie, index) => {
                        <Link key=index to={'/movies/${index ++ 1}'}>
                            <div className={styles.movie} style={{backgroundImage: 'url(${movie.cover})'}}/>
                        </Link>
                    })}
                </div>
                {children}
            </div>
        );
    }

}

module.exports = connect(({movies}) => ({
        movies: movies.all
    }), {
            fetchMoviesActionCreator
            //fetchMovies: fetchMoviesActionCreator
        })(Movies);