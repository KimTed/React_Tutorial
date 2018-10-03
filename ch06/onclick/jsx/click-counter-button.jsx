/*
class ClickCounterButton extends React.Component {
    render() {
        return <button onClick={this.props.handler} className="btn btn-danger">
                    Increase Volume (Current volume is {this.props.counter})
               </button>
    }
}
*/
// 6.9 코드 (위 클래스 컴포넌트를 함수로 작성)
const ClickCounterButton = (props) => {
    return <button
                onClick={props.handler}
                className="btn btn-info">
                Hit the btn!!!!!!
            </button>
}
