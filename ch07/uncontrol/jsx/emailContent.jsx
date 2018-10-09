class Content extends React.Component {
    constructor(props) {
        super(props);
        this.prompt = "please enter your email to win $1,000,000";
        this.submit = this.submitFn.bind(this);
    }

    submitFn(event) {
        let emailAddress = this.refs.emailAddress,
            comments = this.refs.comments;

        console.log(ReactDOM.findDOMNode(emailAddress).value);
        console.log(ReactDOM.findDOMNode6(comments).value);
    }

    handleChangeFn(event) {
        console.log(event.target.value);
        this.setState({"textbook": event.target.value});
    }

    render() {
        return(
            <div className="well">
                <p>{this.prompt}</p>
                <div className="form-group">
                    Email: <input ref="emailAddress" className="form-control" type="text" placeholder="hi@azzat.co"/>
                </div>
                <div className="form-group">
                    Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
                </div>
                <div>
                    <a className="btn btn-primary" value="Submit" onClick={this.submit}> Submit </a>
                </div>
            </div>
        );
    }
}