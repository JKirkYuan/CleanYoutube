import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem 
        key = {video.etag}
        video = {video} />
    });
    return (
        <ul className="col-lg-4 order-1 list-group video-list">
            {videoItems}
        </ul>
    );
}

export default VideoList;
