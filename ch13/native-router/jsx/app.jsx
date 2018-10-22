const React = require('react'),
      ReactDOM = require('react-dom'),
      Router = require('./router.jsx'),
      mappingVal = {
        '#profile': <div>Profile (<a href="#">home</a>)</div>,
        '#accounts': <div>Accounts (<a href="#">home</a>)</div>,
        '*': <div> Dashboard
                <br/>
                <a href="#profile">Profile</a>
                <br/>
                <a href="#accounts">Account</a>
             </div>
      };

ReactDOM.render(
    <Router mapping={mappingVal}/>,
    document.getElementById('content')
);