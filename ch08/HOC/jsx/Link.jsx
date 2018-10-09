class Link extends React.Component {
    render() {
        return(
            <a onClick={this.props.handleClick} href="#"> {this.props.label} </a>
        );
    }
}