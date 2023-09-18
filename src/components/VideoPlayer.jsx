import { Player } from "@livepeer/react"
import * as React from 'react';

const playbackId =
  '382apfiowzvrwj3y';

const PosterImage = () => {
  return (
    <img
      src="https://wallpapercave.com/wp/wp2281843.jpg"
      
    />
  );
};
  

  
const VideoPlayer = () => {
  return (
    <Player
    title="Waterfalls"
    playbackId={playbackId}
    showPipButton
    showTitle={false}
    aspectRatio="16to9"
    poster={<PosterImage />}
    controls={{
      autohide: 3000,
    }}
    theme={{
      borderStyles: { containerBorderStyle: 'hidden' },
      radii: { containerBorderRadius: '10px' },
    }}
  />
  )
}

export default VideoPlayer