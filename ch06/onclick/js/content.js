class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClickFn.bind(this);

        this.state = {
            counter: 0
        };
    }

    handleClickFn(event) {
        this.setState({ counter: ++this.state.counter });
    }

    // 6.6 코드
    /*
    render() {
        return (
            <div>
                <button
                    onClick={this.handleClickFn.bind(this)}
                    className="btn btn-primary">
                Don't click me {this.state.counter} times!!!!!
                </button>
            </div>
        )
    }
    */

    // 6.7 코드
    /*
    render() {
        return <ClickCounterButton
                        counter={this.state.counter}
                        handler={this.handleClick}/>
    }
    */

    // 6.10 코드
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(ClickCounterButton, {
                handler: this.handleClick }),
            React.createElement('br', null),
            React.createElement(Counter, { value: this.state.counter })
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));