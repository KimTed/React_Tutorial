class Logo extends React.Component {
    render() {
        return React.createElement("img", { onClick: this.props.handleClick, width: "40", src: "logo.png", href: "#" });
    }
}