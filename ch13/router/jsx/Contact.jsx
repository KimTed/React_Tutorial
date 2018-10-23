const React = require('react');

module.exports = function Contact(props) {
/*
    setTimeout(() => {
        props.router.push('about')
        }, 1000);
*/
    return (
        <div>
            <h3>Contact Us</h3>
            <input type="text" placeholder="your email" className="form-control"/>
            <textarea type="text" placeholder="your message" className="form-control"/>
            <button className="btn btn-primary">send</button>
        </div>
    );
};