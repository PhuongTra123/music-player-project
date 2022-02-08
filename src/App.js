import {useState, useEffect} from 'react';
import Player from './component/Player';

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Bước Qua Nhau",
      artist:"Vũ",
      img_src:"https://avatar-ex-swe.nixcdn.com/song/2021/11/19/6/d/9/1/1637317177185_500.jpg",
      src: "https://www.nhaccuatui.com/bai-hat/buoc-qua-nhau-vu.EdENCgJm9dAa.html"
    },
    {
      title: "Người Em Cố Đô",
      artist:"Rum, Đaa",
      img_src:"https://avatar-ex-swe.nixcdn.com/song/2021/01/06/1/6/a/7/1609922114277_500.jpg",
      src: "https://www.nhaccuatui.com/bai-hat/nguoi-em-co-do-rum-ft-daa.l6TIwWBOHPwd.html"
    },
    {
      title: "Bước Qua Nhau",
      artist:"Vũ",
      img_src:"https://avatar-ex-swe.nixcdn.com/song/2021/11/19/6/d/9/1/1637317177185_500.jpg",
      src: "https://www.nhaccuatui.com/bai-hat/voiceless-wonpil-day6.Ja8cUmReakEH.html"
    },
    {
      title: "Bước Qua Nhau",
      artist:"Vũ",
      img_src:"https://avatar-ex-swe.nixcdn.com/song/2021/11/19/6/d/9/1/1637317177185_500.jpg",
      src: "https://www.nhaccuatui.com/bai-hat/voiceless-wonpil-day6.Ja8cUmReakEH.html"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
     
    </div>
  );
}

export default App;
