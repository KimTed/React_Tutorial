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
            })
        }, sec* 1000);
    }

    render() {
        return (
            <div>
                <div>
                    <h3>IOSString:</h3> {this.state.currentTime}</div>
                <br/>
                <div> <h3>En Time:</h3> {this.state.currentEnTime}</div>
                <br/>
                <div> <h3>Kr Time:</h3> {this.state.currentKrTime}</div>
            </div>
        )
    }
};

ReactDOM.render(
    <Clock/>,
    document.getElementById('content')
);