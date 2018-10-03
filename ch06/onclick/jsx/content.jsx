class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClickFn.bind(this);

        this.state = {
            counter: 0
        }
    }

    handleClickFn(event) {
        this.setState(
            {counter: ++this.state.counter}
        );
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
            return <div>
                        <ClickCounterButton
                            handler={this.handleClick}/>
                        <br/>
                        <Counter value={this.state.counter}/>
                    </div>
    }
}


ReactDOM.render(
    <Content/>
    ,document.getElementById('content')
);