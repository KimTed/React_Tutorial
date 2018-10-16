/*
//class 형식 _ step.1
class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const url = "/" + this.props.label.toLowerCase().trim().replace(" ", "-");
        return (
            <div>
                <a href={url}>{this.props.label}</a>
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        let menus = [
            'Home',
            'About',
            'Services',
            'Portfolio',
            'Contact us'
        ];
        return (
            <div>
                {menus.map((value, index) => {
                    return (
                        <div key={index}>
                            <Link label={value}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}
*/

// function 형식 _ refactoring (컴포넌트에 this.state와 lifeCycle이 없으면 함수형으로 refactoring 이 가능
const Link = props => {
    let url = "/" + props.label.toLowerCase().trim().replace(/ /g, "-");

    return React.createElement(
        "div",
        null,
        React.createElement(
            "a",
            { href: url },
            props.label
        )
    );
};

const Menu = () => {
    let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];

    return React.createElement(
        "div",
        null,
        menus.map((value, index) => {
            return React.createElement(
                "div",
                { key: index },
                React.createElement(Link, { label: value })
            );
        })
    );
};

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu'));