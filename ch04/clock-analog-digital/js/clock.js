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
        console.log("Rendering...");

        return React.createElement(
            'div',
            null,
            React.createElement(AnalogDisplay, { time: this.state.currentTime }),
            React.createElement(DigitalDisplay, { time: this.state.currentTime })
        );
    }
};

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));