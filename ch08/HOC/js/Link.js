class Link extends React.Component {
    render() {
        return React.createElement(
            "a",
            { onClick: this.props.handleClick, href: "#" },
            " ",
            this.props.label,
            " "
        );
    }
}