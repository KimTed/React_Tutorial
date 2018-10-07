class SliderValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sliderValue: 0 };
        this.handleSlide = this.handleSlideFn.bind(this);
    }
    handleSlideFn(evnt) {
        this.setState({ sliderValue: event.detail.ui.value });
    }
    componentDidMount() {
        window.addEventListener('slide', this.handleSlide);
    }
    componentWillUnmount() {
        window.removeEventListener('slide', this.handlSlide);
    }
    render() {
        return React.createElement(
            'div',
            { className: '' },
            React.createElement(
                'span',
                null,
                'value: ',
                this.state.sliderValue
            )
        );
    }
}