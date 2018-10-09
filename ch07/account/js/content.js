class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "accountNumber": "" };
        this.handleChange = this.handleChangeFn.bind(this);
    }

    handleChangeFn(event) {
        console.log("Type: ", event.target.value);
        this.setState({ "accountNumber": event.target.value.replace(/[^0-9]/ig, '') });
    }

    render() {
        return React.createElement(
            "div",
            null,
            "Account Member:",
            React.createElement("input", {
                type: "text",
                onChange: this.handleChange,
                placeholder: "12345",
                value: this.state.accountNumber }),
            React.createElement("br", null),
            React.createElement(
                "span",
                null,
                this.state.accountNumber.length > 0 ? "You entered: " + this.state.accountNumber : ""
            )
        );
    }
}