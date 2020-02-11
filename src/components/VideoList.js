import React from "react";
import VideoItem from "./VideoItem";

// destructed prop
const VideoList = ({ videos, onVideoSelect }) => {
  //used as a result to map over the empty array
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
