import React, {Component} from 'react';
import './Post.css';


class Post extends Component {
    constructor(props) {
        super(props);
        // this.handleLikeClick = this.handleLikeClick.bind(this);
        // this.state = {isLoggedIn: false};
    }

    render() {
        return (
            <div className="Post">
                <div className="PostHeader">
                    <div className="AuthorName">
                        {this.props.author.name}
                    </div>
                    <div className="PostTitle">
                        {this.props.header}
                    </div>
                    <div className="PostTimePublished">
                        {this.props.created}
                    </div>
                </div>
                <div className="PostBody">
                    <div className="PostContent">
                        {this.props.content}
                    </div>
                </div>
                <div className="PostInfo">
                    <div className="PostVoting">
                        {this.props.likes}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
