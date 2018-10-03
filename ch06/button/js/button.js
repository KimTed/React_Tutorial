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
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: this.handleSave.bind(this) },
                "Save"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                { onClick: this.clickEevent },
                " btn2 "
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "div",
                { style: { border: '1px solid red' },
                    onMouseOverCapture: (event => {
                        console.log("mose over on capture event");
                        console.dir(event, this);
                    }).bind(this)
                    /*
                    onMouseOver={((event)=>{
                        console.log("mouse over on bubbling event");
                        console.dir(event);
                        console.dir(this);
                    }).bind(this)}
                    */
                    , onMouseOver: event => {
                        console.log("mouse over on bubbling event");
                        console.dir(event);
                        console.dir(this);
                    }
                },
                "Open DevTools and move yout mouse cursor over here "
            )
        );
    }
}

ReactDOM.render(React.createElement(SaveButton, null), document.getElementById('content'));