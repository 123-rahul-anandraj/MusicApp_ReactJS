import { useEffect, useState } from "react";
import MusicPlayer from "./components/MusicPlayer";

function App() {
    const [songs] = useState([
        {
            title: "Coca Cola Tu",
            Singers: "Neha Kakkar, Young Desi, Tony Kakkar",
            Composer: "Tanishk Bagchi, Tony Kakkar",
            srcImg: "images/Luka-Chuppi.jpg",
            source: "songs/Coca Cola Luka Chuppi.mp3",
        },
        {
            title: "Jho Teri Photo",
            Singers: "Karan Sehmbi",
            Composer: "GoldBoy, Tanishk Bagchi",
            srcImg: "./images/Luka-Chuppi-2.jpg",
            source: "./songs/Jho Teri Photo Luka Chuppi.mp3",
        },
        {
            title: "Vaathi Coming",
            Singers: "Anirudh Ravichander, Gana Balachandar",
            Composer: "Anirudh Ravichander",
            srcImg: "./images/Vaathi-Coming-Master.jpg",
            source: "./songs/Vaathi Coming Master.mp3",
        },
        {
            title: "Unna Nenachu",
            Singers: "Ilaiyaraaja, Sid Sriram",
            Composer: "Ilaiyaraaja",
            srcImg: "./images/Unna-Nenachu-Psycho.jpg",
            source: "./songs/Unna Nenachu Psycho.mp3",
        },
        {
            title: "Mera Naam Tu",
            Singers: "Abhay Jodhpurkar",
            Composer: "Ajay-Atul",
            srcImg: "./images/Mera-Naam-Tu_Zero.jpg",
            source: "./songs/Mere Naam Tu-Zero.mp3",
        },
        {
            title: "Charlie BGM",
            Singers: "Chorus",
            Composer: "Gopi Sunder",
            srcImg: "./images/Charlie-BGM.jpg",
            source: "./songs/Charlie BGM.mp3",
        },
        {
            title: "Billa Theme Song",
            Singers: "Intrumental",
            Composer: "Yuvan Shankar Raja",
            srcImg: "./images/Billa-Theme-Song.jpg",
            source: "./songs/Billa Theme Song.mp3",
        }
    ])
    const [currentSongIndex, setCurrentSongIndex] = useState(0); {/*React Hook*/ }
    const [nextSongIndex, setNextSongIndex] = useState(0); {/*React Hook*/ }
    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            }
            else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex, songs.length])

  return (
    <div className="App">             
          {/* Our main-component name */} {/*Props inside <MusicPlayer />*/}
          <MusicPlayer
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
          /> 
      </div>
  );
}

export default App;
