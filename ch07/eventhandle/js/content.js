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
        };
    }

    handleRadioFn(event) {
        let obj = {};
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "angular",
                checked: this.state.radioGroup["angular"] ? this.state.radioGroup["angular"] : false,
                onChange: this.handleRadio }),
            "angular",
            React.createElement("br", null),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "react",
                checked: this.state.radioGroup["react"] ? this.state.radioGroup["react"] : false,
                onChange: this.handleRadio }),
            "react",
            React.createElement("br", null),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "polymer",
                checked: this.state.radioGroup["polymer"] ? this.state.radioGroup["polymer"] : false,
                onChange: this.handleRadio }),
            "polymer"
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
        Object.keys(this.state.checkboxGroup).map(key => {
            if (key === targetKey) {
                this.state.checkboxGroup[key] = targetValue;
            } else {
                this.state.checkboxGroup[key] = false;
            }
        });

        this.setState({ checkboxGroup: this.state.checkboxGroup });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "node",
                checked: this.state.checkboxGroup['node'],
                onChange: this.handleCheckbox }),
            " Node",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "react",
                checked: this.state.checkboxGroup['react'],
                onChange: this.handleCheckbox }),
            " React",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "express",
                checked: this.state.checkboxGroup['express'],
                onChange: this.handleCheckbox }),
            " Express",
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "mongodb",
                checked: this.state.checkboxGroup['mongodb'],
                onChange: this.handleCheckbox }),
            " MongoDB"
        );
    }
}

class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "selectedValue": "node" };
        this.handleSelectChange = this.handleSelectChangeFn.bind(this);
    }

    handleSelectChangeFn(event) {
        this.setState({ "selectedValue": event.target.value });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement(
                "select",
                {
                    value: this.state.selectedValue,
                    onChange: this.handleSelectChange },
                React.createElement(
                    "option",
                    { value: "ruby" },
                    "Ruby"
                ),
                React.createElement(
                    "option",
                    { value: "node" },
                    "Node"
                ),
                React.createElement(
                    "option",
                    { value: "python" },
                    "Python"
                )
            )
        );
    }
}