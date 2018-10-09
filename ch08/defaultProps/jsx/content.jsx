class Buttons extends React.Component {
    render() {
        return <button className="btn">{this.props.buttonLabel}</button>
    }
}
/*
// 이렇게 할 경우 'buttonLabel'를 모름
const Buttons = (props) => {
    return <button className="btn">{this.props.buttonLabel}</button>
}
*/
Buttons.defaultProps = {"buttonLabel": "submit"}

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
const Content = () => {
    return(
        <div>
            <Buttons buttonLabel="Start"/>
            <Buttons/>
            <Buttons/>
            <Buttons/>
        </div>
    );
}