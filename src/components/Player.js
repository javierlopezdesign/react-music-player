import React, { useRef, useState } from "react";

// imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import icon
import { faPlay, faAngleLeft, faAngleRight  } from "@fortawesome/free-solid-svg-icons";

const Player = ( {currentSong,isPlaying,setIsPlaying} ) => {
    // Ref
    const audioRef = useRef(null);

    // event handlers
    const playSongHandler = () => {
        // console.log(audioRef.current);
        
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else{
            audioRef.current.play()
            setIsPlaying(!isPlaying);
            
        }
    }

    const timeUpdateHandler = (event)=>{
        const duration = event.target.duration;
        const current = event.target.currentTime;
        // set songInfo state > ... leave whatever the state had before!!
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    }

    // function to reduce the time
    const getTime = (time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: null
    })

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime} 
                    type="range" 
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">

                <FontAwesomeIcon className="skip-back"  size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />

            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}
            ></audio>
        </div>
    )
}

export default Player;