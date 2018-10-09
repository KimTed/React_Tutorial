ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        Content,
        null,
        React.createElement(
            "h1",
            null,
            "React"
        ),
        React.createElement(
            "p",
            null,
            "Rocks"
        )
    ),
    React.createElement(
        Content,
        null,
        React.createElement(
            "a",
            { href: "http://www.google.com" },
            " Go~ Google "
        )
    ),
    React.createElement(
        Content,
        null,
        React.createElement(
            "a",
            { href: "http://react.rocks" },
            " http://react.rocks "
        )
    )
), document.getElementById('content'));