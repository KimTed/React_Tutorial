import React, {Component} from 'react';

/*
class AddLi extends Component {
    constructor() {
        super();
        this.onClickAddBtn = this.onClickAddBtnFn.bind(this);
    }

    onClickAddBtnFn() {
        console.log(this.inputBox.value);
        this.props.handleAddedData(this.inputBox.value);
        this.inputBox.value = '';
        this.inputBox.focus();
//        this.inputBox.value
    }
    render() {
        return(
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="할 일을 입력해주세요" ref={input  => this.inputBox = input}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.onClickAddBtn}>등록</button>
                </span>
            </div>
        );
    };
}
*/

const AddLi = (props) => {
    let inputBox;

    const onClickAddBtnFn = () => {
          console.log(inputBox.value);
          props.handleAddedData(inputBox.value);
          inputBox.value = '';
          inputBox.focus();
  //        this.inputBox.value
      }

    return (
        <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="할 일을 입력해주세요" ref={input  => inputBox = input}/>
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={onClickAddBtnFn}>등록</button>
            </span>
        </div>
    );
}
export default AddLi;