import React from 'react';

const Video = () => {
  return (
    <div className="h-full w-full bg-white">
      <video
        className="h-full w-full object-cover"
        src="https://cdn.pixabay.com/video/2025/10/23/311621.mov"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Video;
