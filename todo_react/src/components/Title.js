import React, {Component} from 'react';

/*
class Title extends Component {
    render() {
        return(
            <div className="page-header">
                <h1>{this.props.textP}</h1>
            </div>
        );
    }
}
*/

const Title = (props) => {
    return(
        <div className="page-header">
            <h1>{props.textP}</h1>
        </div>
    );
}

export default Title;