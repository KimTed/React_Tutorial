const ReactRouter = require('react-router'),
      //{hashHistory} = require('react-router'),    //React Router에 포함된 해시 히스토리
      History = require('history');

let {Router, Route, Link} = ReactRouter,
    hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
                        queryKey: false
                });

ReactDOM.render(
    <Router history={hashHistory}}>
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