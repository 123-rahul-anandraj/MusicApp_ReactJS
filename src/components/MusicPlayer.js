// MusicPlayer.js
import React, { useEffect, useRef, useState } from 'react'
import AudioController from './AudioController';
import MusicDetail from './MusicDetail';
function MusicPlayer(props) {
    const audioEl = useRef(null);
    const [isPlaying, set_isPlaying] = useState(false);
  
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play()
        }
        else {
            audioEl.current.pause()
        }
    });
    const skipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;

            });
        }
        else {
            props.setCurrentSongIndex((forwards = false) => {
                let temp = props.currentSongIndex;
                temp--;
                if (temp < 0) {
                    temp = props.songs.length-1;
                }
                return temp;
            });
        }
    }

    return (
        <div className="MusicPlayer">
            <img src={props.songs[props.currentSongIndex].srcImg} alt="Song_BackImg"/>
            <h3>SONG PLAYING</h3>
            <MusicDetail
                songs={props.songs[props.currentSongIndex]}
            /> {/* Song name and artist name */}
            <AudioController
                isPlaying={isPlaying}
                set_isPlaying={set_isPlaying}
                skipSong={skipSong}
            /> {/* Go to next, prevois song and pause */}      
            <audio className="play_audio" src={props.songs[props.currentSongIndex].source} ref={audioEl} controls>
            </audio>  
            <p> Next Song: <span>
                {props.songs[props.nextSongIndex].title} by {"  "}
                {props.songs[props.nextSongIndex].Composer}
                </span>
            </p>
        </div>
        
    )
}
export default MusicPlayer;