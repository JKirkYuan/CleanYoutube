import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = process.env.API_KEY;
// Create a new component, this component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'MKBHD'}, (videos) => {
            this.setState({ videos });
            // this.setState({videos: videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
                <VideoDetail video={this.state.videos[0]}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

//Take component's generated HTML and put onto DOM
