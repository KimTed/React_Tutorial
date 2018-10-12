class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const url = "/" + this.props.label.toLowerCase().trim().replace(" ", "-");
        return React.createElement(
            "div",
            null,
            React.createElement(
                "a",
                { href: url },
                this.props.label
            )
        );
    }
}

class Menu extends React.Component {
    render() {
        let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];
        return React.createElement(
            "div",
            null,
            menus.map((value, index) => {
                return React.createElement(
                    "div",
                    { key: index },
                    React.createElement(Link, { label: value })
                );
            })
        );
    }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu'));