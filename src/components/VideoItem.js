import React from "react";
import "./VideoItem.css";

//functional component for accessing the video obj
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    //callback with the selected video
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
