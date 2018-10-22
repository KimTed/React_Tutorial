// require('../css/bootstrap.css');  //이렇게 하면 error 발생
require('../css/main.css');

const React = require('react'),
      ReactDOM = require('react-dom'),
      Content = require('./content.jsx');

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);