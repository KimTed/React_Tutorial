class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadioFn.bind(this);
        this.state = {
            radioGroup: {
                "angular": false,
                "react": false,
                "polymer": false
            }
        }
    }

    handleRadioFn(event) {
        let obj ={};
        obj[event.target.value] = event.target.checked;
        this.setState({radioGroup: obj});
    }

    render() {
        return (
            <form>
                <input type ="radio"
                    name="radioGroup"
                    value="angular"
                    checked={this.state.radioGroup["angular"] ? this.state.radioGroup["angular"] : false}
                    onChange={this.handleRadio}/>
                    angular
                    <br/>

                <input type="radio"
                    name="radioGroup"
                    value="react"
                    checked={this.state.radioGroup["react"] ? this.state.radioGroup["react"] : false}
                    onChange={this.handleRadio}/>
                    react
                    <br/>

                <input type="radio"
                    name="radioGroup"
                    value="polymer"
                    checked={this.state.radioGroup["polymer"] ? this.state.radioGroup["polymer"] : false}
                    onChange={this.handleRadio}/>
                    polymer
            </form>
        );
    }
}

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckbox = this.handleCheckboxFn.bind(this);
        this.state = {
            checkboxGroup: {
                "node": false,
                "react": true,
                "express": false,
                "mongodb": false
            }
        };
    }

    handleCheckboxFn(event) {
        let targetKey = event.target.value,
            targetValue = event.target.checked;

        //return 받아서 checkboxGroup에 할당하는 법 생각해보기
        Object.keys(this.state.checkboxGroup).map((key) => {
            if(key === targetKey) {
                this.state.checkboxGroup[key] = targetValue;
            } else {
                this.state.checkboxGroup[key] = false;
            }
        });

        this.setState({checkboxGroup: this.state.checkboxGroup});
    }

    render() {
        return(
            <form>
                <input type="checkbox"
                    name="checkboxGroup"
                    value="node"
                    checked={this.state.checkboxGroup['node']}
                    onChange={this.handleCheckbox}/> Node
                <br/>

                <input type="checkbox"
                    name="checkboxGroup"
                    value="react"
                    checked={this.state.checkboxGroup['react']}
                    onChange={this.handleCheckbox}/> React
                <br/>

                <input type="checkbox"
                    name="checkboxGroup"
                    value="express"
                    checked={this.state.checkboxGroup['express']}
                    onChange={this.handleCheckbox}/> Express
                <br/>

                <input type="checkbox"
                    name="checkboxGroup"
                    value="mongodb"
                    checked={this.state.checkboxGroup['mongodb']}
                    onChange={this.handleCheckbox}/> MongoDB

            </form>
        );
    }
}

class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"selectedValue": "node"};
        this.handleSelectChange = this.handleSelectChangeFn.bind(this);
    }

    handleSelectChangeFn(event) {
        this.setState({ "selectedValue": event.target.value})
    }

    render() {
        return(
            <form>
                <select
                    value={this.state.selectedValue}
                    onChange={this.handleSelectChange}>
                        <option value="ruby">Ruby</option>
                        <option value="node">Node</option>
                        <option value="python">Python</option>
                </select>
            </form>
        );
    }
}