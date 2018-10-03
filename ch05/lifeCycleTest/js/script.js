/*
class Content extends React.Component {
    componentWillMount() {
        console.log("componentWillMount 실행");
        console.log(ReactDOM.findDOMNode(this));
    }
    componentDidMount() {
        console.log("componentDidMount 실행");
        console.log(ReactDOM.findDOMNode(this));
        console.dir(ReactDOM.findDOMNode(this));
    }
    render () {
        return (
            <div/>
        )
    }
}
*/

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));