import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div className="video-detail col-md-8 loading"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/></div>
  };
  const videoId = video.id.videoId;
  console.log(videoId);
  const url = `https://www.youtube.com/embed/${videoId}`;
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="details-title">{video.snippet.title}</div>
        <div className="details-description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;