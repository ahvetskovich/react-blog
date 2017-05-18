import React, {Component} from 'react';
import Post from '../Post/Post';
import logo from '../../logo.svg';
import './App.css';
// import fetch from 'whatwg-fetch';

class App extends Component {
    constructor(props) {
        super(props);
    }

    loadJSON(filepath, isAsync, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', filepath, isAsync);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    render() {
        // let postsData =  require('/public/generated_posts.json');
        let postsData = fetch('/public/generated_posts.json')
            .then((res) => res.json())
            .then((data) => {
                console.log('data:', data);
            });
        let posts = postsData.map((postData) =>
            <Post
                key={postData.id}
                id={postData.id}
                header={postData.header}
                author={postData.author}
                created={postData.created}
                updated={postData.updated}
                likes={postData.likes}
            />
        );

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="Posts">
                    {posts}
                </div>
            </div>
        );
    }
}


export default App;
