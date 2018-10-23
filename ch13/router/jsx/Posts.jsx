const {Link} = require('react-router'),
      React = require('react');

module.exports = function Posts(props) {
    return (
        <div> Posts
            <ol>
                {props.route.posts.map((post, index) => {
                    <li key={post.slug}>
                        <Link to={'posts/${posts.slug}'}> {post.title} </Link>
                    </li>
                })}
            </ol>
        </div>
    );
};