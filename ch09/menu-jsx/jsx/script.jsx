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
const Link = (props) => {
    let url = "/" + props.label.toLowerCase().trim().replace(/ /g, "-");

    return (
        <div>
            <a href={url}>{props.label}</a>
        </div>
    );
};

const Menu =() => {
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
                            );
                        })
            }
        </div>
    );
};

ReactDOM.render(
    <Menu/>,
    document.getElementById('menu')
);