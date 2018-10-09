class Buttons extends React.Component {
    render() {
        return React.createElement(
            "button",
            { className: "btn" },
            this.props.buttonLabel
        );
    }
}
/*
// 이렇게 할 경우 'buttonLabel'를 모름
const Buttons = (props) => {
    return <button className="btn">{this.props.buttonLabel}</button>
}
*/
Buttons.defaultProps = { "buttonLabel": "submit"

    /*
    class Content extends React.Component {
        constructor(props) {
            super(props);
        }
    
        render() {
            return(
                <div>
                    <Buttons buttonLabel="Start"/>
                    <Buttons/>
                    <Buttons/>
                    <Buttons/>
                </div>
            );
        }
    }
    */
};const Content = () => {
    return React.createElement(
        "div",
        null,
        React.createElement(Buttons, { buttonLabel: "Start" }),
        React.createElement(Buttons, null),
        React.createElement(Buttons, null),
        React.createElement(Buttons, null)
    );
};