import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
class TodoLi extends Component {
    constructor() {
        super();
        this.onClickRemoveBtn = this.onClickRemoveBtnFn.bind(this);
    }

    onClickRemoveBtnFn() {
        this.props.handleRmoveDataFn(this.props.todoP);
    }
    render() {
        return(
            <li>
                <span>{this.props.todoP}</span>
                <span className="btn-container">
                    <a href="#" onClick={this.onClickRemoveBtn}>삭제</a>
                </span>
            </li>
        );
    }
}
*/

const TodoLi= (props) => {
    const onClickRemoveBtnFn = () => {
        props.handleRmoveDataFn(props.todoP);
    }

    return(
        <li>
            <span>{props.todoP}</span>
            <span className="btn-container">
                <a href="#" onClick={onClickRemoveBtnFn}>삭제</a>
            </span>
        </li>
    );
}

TodoLi.propTypes = {
    todoP: PropTypes.Number
};

export default TodoLi;