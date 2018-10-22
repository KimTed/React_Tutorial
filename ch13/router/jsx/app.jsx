const ReactRouter = require('react-router');
let {Router, Route, Link} = ReactRouter;

ReactDOM.render(
    <Router history={hasHistory}}>
        <Route path="/" component={Content}>
            <Route path="/about" component={About}/>
            <Route path="/posts" component={posts}/>
            <Route path="/posts/:id" component={Post} posts={posts}/>
            <Route path="/contact" component={Contact}/>
        </Route>
        <Route path="/login" component={Login}/>
    </Router>
    , document.getElementById('content')
);