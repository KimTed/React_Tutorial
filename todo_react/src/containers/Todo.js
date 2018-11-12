import React, {Component} from 'react';

import Title from '../components/Title';
import AddLi from '../components/AddLi';
import TodoLi from '../components/TodoLi';

/*
const text = "To do list";
const todos = [
      "이것도 해야 되고",
      "저것도 해야 되고",
      "그것도 해야 되고",
      "언제 다 하나"
      ];
*/


class Todo extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            todos: []
        };
        this.handleAddedData = this.handleAddedDataFn.bind(this);
        this.handleRmoveData = this.handleRmoveDataFn.bind(this);
    }

    componentWillMount() {}
    componentDidMount() {
        const text = "to do List",
              todos = [
                      "이것도 해야 되고",
                      "저것도 해야 되고",
                      "그것도 해야 되고",
                      "언제 다 하나"
                      ];
        this.setState((prevState) => {
            return {
                text: text,
                todos: todos
            }
        }) ;
//         this.setState((prevState) =>({text, todos}))
    }
    componentWillReceiveProps() {}
    componentWillUpdate() {}
    componentDidUpdate() {}
    componentWillUnmount() {}

    handleAddedDataFn(text) {
        console.log(text);
        this.setState((prevState)=>{
            const todos = prevState.todos;
            todos.push(text);

            return ({todos});
        });
    }

    handleRmoveDataFn(text) {
        console.log(text +" _ 지울것");
        this.setState((prevState)=>{
            const todos = prevState.todos;


            const idx = todos.indexOf(text);
            todos.splice(idx, 1);

            return ({todos});
        });
    }

    render() {
        const todosP = this.state.todos.map(
                            (todo, i) => <TodoLi todoP={todo} key={'todo'+ i} handleRmoveDataFn={this.handleRmoveData} />
                        );

        return(
            <div className="container">
                <Title textP = {this.state.text}/>
                <AddLi handleAddedData = {this.handleAddedData}/>
                <hr/>
                <ul>
                    {todosP}
                </ul>
            </div>
        );
    }
}

export default Todo;