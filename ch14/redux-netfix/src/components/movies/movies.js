const React = require('react'),
      {connect} = require('react-redux'),
      {Link} = require('react-router'),
      movies = require('../../movies.json'),
      {fetchMoviesActionCreator} = require('modules/movies.js'),
      styles = require('./movies.css');

class Movies extends React.Component {
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
                    {movies.map((movie, index) => (
                        <Link key={index} to={'/movies/${index + 1}'}>
                            <div className={styles.movie} style={{backgroundImage: `url(${movie.cover})`}}/>
                            {/*
                            //backgroudImage 값을 작은 따음표를 할 경우:
                            React.createElement('div', { className: styles.movie, style: { backgroundImage: 'url(${movie.cover})' } })
                            //backgroundImage 값을 `(~)로 할 경우:
                            React.createElement('div', { className: styles.movie, style: { backgroundImage: 'url(' + movie.cover + ')' } })
                            이와 같이 파싱이 되는데...
                            */}
                        </Link>
                    ))}
                </div>
                {children}
            </div>
        );
    }

}

module.exports = connect(({movies}) => ({
        movies: movies.all
    }), {
            //fetchMoviesActionCreator
            fetchMovies: fetchMoviesActionCreator
        })(Movies);