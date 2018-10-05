class SliderButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sliderValue: 0};
        this.handleSlide = this.handleSlideFn.bind(this);
        this.handleChange = this.handleChangeFn.bind(this);
    }

    handleChangeFn(value) {
        return () => {
            $('#slider').slider('value', this.state.sliderValue + value);
            this.setState({sliderValue: this.state.sliderValue + value})
        }
    }

    handleSlideFn(evnt, ui) {
        this.setState({sliderValue: ui.value});
    }

    componentDidMount() {
        $('#slider').on('slide', this.handleSlide);
    }

    componentWillUnmount() {
        $('#slide').off('slide', this.handleSlide);
    }

    render() {
        return (
            <div>
                <button disabled={(this.state.sliderValue < 1)? true: false}
                    className="btn default-btn"
                    onClick={this.handleChange(-1)}
                >
                    1 Less ({this.state.sliderValue-1})
                </button>

                <button disabled={(this.state.sliderValue > 99)? true: false}
                    className="btn default-btn"
                    onClick={this.handleChange(1)}
                >
                    1 Less ({this.state.sliderValue+1})
                </button>
            </div>
        )
    }
}