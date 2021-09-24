// MusicDetail.js
import React from 'react'
function MusicDetail(props) {
    return (
        <div className="MusicDetail">
            <div className="songImg">
                <img src={props.songs.srcImg} alt="Song_1"/>
            </div>
            <h3 className="songTitle"> Song: <u>{props.songs.title}</u> </h3>
            <h3 className="songArtist"> Singers: <u>{props.songs.Singers}</u></h3>
            <h3 className="songArtist">Composers: <u>{props.songs.Composer}</u></h3>
        </div>
    )
}
export default MusicDetail;
