class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResizeFn.bind(this);

        let order = props.order,
            i = 1;

        this.state = {
            outerStyle: this.getStyle(4, i),
            innerStyle: this.getStyle(1, i),
            selectedStyle: this.getStyle(2, i),
            taggerStyle: { top: order * 20,
                width: 25,
                height: 25
            }
        };
    }

    getStyle(i, m) {
        let value = i * m;
        return {
            top: value,
            bottom: value,
            left: value,
            right: value
        };
    }

    handleResizeFn(event) {
        let w = 1 + Math.round(window.innerWidth / 300);
        this.setState({
            taggerStyle: { top: this.props.order * w * 10,
                width: w * 10,
                height: w * 10
            },
            textStyle: { left: w * 13,
                fontSize: 7 * w
            }
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    /*
    //작동 안함: onReSize를 지원하지 않기 때문
    render() {
        return {
            <div>
                <div onReSize={this.handleResize}
                    className="radio-tagger"
                    style={this.stat.taggerStyle}/>
            </div>
        }
    }
    */

    //책 소스로 하면 radio box와 글자가 곂침
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'radio-tagger', style: this.state.taggerStyle },
                React.createElement('input', { type: 'radio', name: this.props.name, id: this.props.id }),
                React.createElement(
                    'label',
                    { htmlFor: this.props.id },
                    React.createElement(
                        'div',
                        { className: 'radio-text', style: this.state.textStyle },
                        this.props.label
                    ),
                    React.createElement(
                        'div',
                        { className: 'radio-outer', style: this.state.outerStyle },
                        React.createElement(
                            'div',
                            { className: 'radio-inner', style: this.state.innerStyle },
                            React.createElement('div', { className: 'radio-selected', style: this.state.selectedStyle })
                        )
                    )
                )
            )
        );
    }
}