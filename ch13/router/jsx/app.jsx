const React = require('react'),
      ReactDOM = require ('react-dom'),
      ReactRouter = require('react-router'),
      //{hashHistory} = require('react-router'),    //React Router에 포함된 해시 히스토리
      History = require('history');

const Content = require('./content.jsx')
const About = require('./about.jsx')
const Contact = require('./contact.jsx')
const Login = require('./login.jsx')
const Post = require('./post.jsx')
const Posts = require('./posts.jsx')
const {withRouter} = require('react-router')

const posts = require('../posts.js')        //URL, 제목, 텍스트 등 블로그 게시물을 위한 데이터

let {Router, Route, Link} = ReactRouter,
    hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
                        queryKey: false
                });

ReactDOM.render(
    <Router history={hashHistory}>
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