const React = require('react'),
      {Link} = require('react-router');

class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Node.University</h1>
                <div className="navbar navbar-default">
                    <ul className="nav nav-pills navbar-nav">
                        <li className={(this.context.router.isActive('/about')) ? 'active' : ''}>
                            <Link to="/about" activeClassName="active">
                                About
                            </Link>
                        </li>
                        <li className={(this.context.router.isActive('/posts')) ? 'active' : ''}>
                            <Link to="/posts" activeClassName="active">
                                Blog
                            </Link>
                        </li>
                        <li className={(this.context.router.isActive('/contact') ? 'active' : '')}>
                            <Link to="/contact" activeClassName="active">
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" activeClassName="active">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

// 정적 클래스 속성으로 contextTypes를 설정하여 this.context.router로 접근 하는 방법
Content.contextTypes = {
    //router: React.ProtoTypes.object.isRequired
    router: React.PropTypes.object.isRequired
};

module.exports = Content;