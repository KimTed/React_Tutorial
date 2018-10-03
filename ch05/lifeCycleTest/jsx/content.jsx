class Content extends React.Component {
    constructor(props) {
        super(props);

        this.launchClock(1);

        this.state = {
            counter: 0,
            currentTime: (new Date()).toLocaleString()
        };
    }


    launchClock(sec) {
        setInterval((sec) => {
            if (this.state.counter > 2) return
            else
                this.setState({
                    counter: ++this.state.counter,
                    currentTime: (new Date()).toLocaleString()
                });
        } , sec * 1000);
    }

    render() {
    console.log("#######this.state.counter: " + this.state.counter + " ##########");
        if (this.state.counter > 2) return <div/>

        return (
            <Logger time={this.state.currentTime}/>
        )
    }
}