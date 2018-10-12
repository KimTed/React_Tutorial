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

ReactDOM.render(
    <Menu/>,
    document.getElementById('menu')
);