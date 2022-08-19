import React from 'react';
import { Player } from 'video-react';
import "./video-react.css"
import FilyasyonThumbnail from "./video-thumbnail.jpg";
import Filyasyon from "./Filyasyon.mp4";


export const Video = props => {
    return (
        <div className="video-react-4-3 myStyle">
            <Player
                playsInline
                poster={FilyasyonThumbnail}
                src={Filyasyon}
            />
        </div>
    );
};