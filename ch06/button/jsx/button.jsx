class SaveButton extends React.Component {
    constructor(props) {
        super(props);
        this.clickEevent = this.clickhandleFn.bind(this);
    }

    handleSave(evnt) {
        console.log(this, evnt);
    }

    clickhandleFn(event) {
        console.log(this, event);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSave.bind(this)}>Save</button>
                <br/>
                <button onClick={this.clickEevent}> btn2 </button>

                <br/>
                <br/>

                <div style={{border: '1px solid red'}}
                    onMouseOverCapture={((event) => {
                        console.log("mose over on capture event");
                        console.dir(event, this);
                    }).bind(this)}
                    /*
                    onMouseOver={((event)=>{
                        console.log("mouse over on bubbling event");
                        console.dir(event);
                        console.dir(this);
                    }).bind(this)}
                    */
                    onMouseOver={((event)=>{
                        console.log("mouse over on bubbling event");
                        console.dir(event);
                        console.dir(this);
                    })}
                >
                     Open DevTools and move yout mouse cursor over here </div>
            </div>
        )
    }
}

ReactDOM.render(
    <SaveButton/>
    ,document.getElementById('content')
);