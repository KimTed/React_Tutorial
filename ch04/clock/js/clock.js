class Clock extends React.Component {
    constructor(props) {
        super(props);

        //this.launchClock(1);

        this.state = {
            currentTime: new Date().toISOString(),
            currentEnTime: new Date().toLocaleString('en'),
            currentKrTime: new Date().toLocaleString('kr')
        };
    }

    launchClock(sec, callBack) {
        setInterval((sec, callBack) => {
            console.log("Update Time...");
            this.setState({
                currentTime: new Date().toISOString(),
                currentEnTime: new Date().toLocaleString('en'),
                currentKrTime: new Date().toLocaleString('kr')
            });
        }, sec * 1000);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'IOSString:'
                ),
                ' ',
                this.state.currentTime
            ),
            React.createElement('br', null),
            React.createElement(
                'div',
                null,
                ' ',
                React.createElement(
                    'h3',
                    null,
                    'En Time:'
                ),
                ' ',
                this.state.currentEnTime
            ),
            React.createElement('br', null),
            React.createElement(
                'div',
                null,
                ' ',
                React.createElement(
                    'h3',
                    null,
                    'Kr Time:'
                ),
                ' ',
                this.state.currentKrTime
            )
        );
    }
};

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));