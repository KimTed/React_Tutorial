const LoadWebsite = (Component) => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                    "label": "Run",
                    "handleClick": this.handleClickFn.bind(this)
                    };
        }

        getUrl() {
            return "http://reactquickly.co/";
        }

        handleClickFn(event) {
            let iframe = document.getElementById('iframe').src = this.getUrl();
        }

        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this));
        }

        render() {
            console.log(this.state);
            console.log(this.props);
            return(
                <Component {...this.state} {...this.props}/>
            );
        }
    }

    _LoadWebsite.displayName = 'EnhancedComponent';
    return _LoadWebsite;
}