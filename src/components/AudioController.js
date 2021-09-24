// AudioController.js
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faPause, faForward, faPlay } from '@fortawesome/free-solid-svg-icons'
function AudioController(props) {
    return (
        <div className="AudioController">
            <button className="Skip_Btn" onClick={() => props.skipSong(false)}>
                <FontAwesomeIcon icon={faBackward} /> {/*icon to go backwards*/}
            </button>
            <button className="PlayPause_Btn" onClick={() => props.set_isPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} /> {/*icon to play or pause the song*/}
            </button>
            <button className="Skip_Btn" onClick={() => props.skipSong()}>
                <FontAwesomeIcon icon={faForward} /> {/*icon to go forward*/}
            </button>
        </div>
    )
}
export default AudioController;
