class Content extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.children.length);
        console.log(this.props.children);
    }

    render() {
        return(
            <div className="content"> {this.props.children} </div>
        );
    }
}