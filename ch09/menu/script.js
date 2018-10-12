class Menu extends React.Component{
    render() {
        let menus = [
            'home',
            'About',
            'Services',
            'Portfolio',
            'Contact us'
        ];

        return React.createElement(
            'div',
            null,
            menus.map((value, index) => {
                return React.createElement(
                    'div',
                    {"key": index},
                    React.createElement(Link, {"label": value})
                );
            })
        );
    };
}

class Link extends React.Component{
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-')
        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                {"href": url},
                this.props.label
            ),
            React.createElement('br')
        );
    }
}

ReactDOM.render(
    React.createElement(
        Menu,
        null
    )
    ,document.getElementById('menu')
);