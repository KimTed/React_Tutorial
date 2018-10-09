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

Buttons.propTypes = {
    handler: PropTypes.func.isRequired,
    title: PropTypes.String,
    email(Props, propName, ComponentName) {
        let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!emailRegularExpression.test(Props[propName])) {
            return new Error("Email validation failed!");
        }
    }
}

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
    let number = 1;

    return(
        <div>
            <Buttons buttonLabel="Start"/>
            <Buttons/>
            <Buttons title={number}/>
            <Buttons/>
            <Buttons email="not-a-valide-email"/>
            <Buttons email="test@naver.com"/>
        </div>
    );
}