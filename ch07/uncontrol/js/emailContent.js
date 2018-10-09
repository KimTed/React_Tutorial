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
        this.setState({ "textbook": event.target.value });
    }

    render() {
        return React.createElement(
            "div",
            { className: "well" },
            React.createElement(
                "p",
                null,
                this.prompt
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                "Email: ",
                React.createElement("input", { ref: "emailAddress", className: "form-control", type: "text", placeholder: "hi@azzat.co" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                "Comments: ",
                React.createElement("textarea", { ref: "comments", className: "form-control", placeholder: "I like your website!" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "a",
                    { className: "btn btn-primary", value: "Submit", onClick: this.submit },
                    " Submit "
                )
            )
        );
    }
}