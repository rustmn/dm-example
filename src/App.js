import { Player, Controller } from 'dm-standard';

const types = {
  dash: 'application/dash+xml',
  hls: 'application/x-mpegURL'
}

const videos = [
  {
    id: `-en`,
    language: 'en',
    captions: {
      src: 'https://cdn.player-standart-aws.deep.movie/out/INTRO_NI/av1/en/captions/INTRO_NI_ENG.vtt',
      language: 'en'
    },
    video: {
      hls: {
        src: 'https://cdn.player-standart-aws.deep.movie/NI_NEW/NI_EN/H265/index.m3u8',
        type: types.hls
      },
      dash: {
        src: 'https://cdn.player-standart-aws.deep.movie/NI_NEW/NI_EN/AV1/stream.mpd',
        type: types.dash,
      }
    }
  },
  {
    id: `-ru`,
    language: 'ru',
    captions: {
      src: 'https://cdn.player-standart-aws.deep.movie/out/INTRO_NI/av1/ru/captions/INTRO_NI_RUS.vtt',
      language: 'ru'
    },
    video: {
      hls: {
        src: 'https://cdn.player-standart-aws.deep.movie/NI_NEW/NI_RU/H265/index.m3u8',
        type: types.hls
      },
      dash: {
        src: 'https://cdn.player-standart-aws.deep.movie/NI_NEW/NI_RU/AV1/stream.mpd',
        type: types.dash,
      }
    }
  }
];


function App() {
  const pause = () => {
    Controller.pause();
  }
  const play = () => {
    Controller.play();
  }
  const fs = () => {
    Controller.toggleFullscreen();
  }
  return (
    <>
    <button onClick = {pause}>Pause</button>
    <button onClick = {play}>Play</button>
    <button onClick = {fs}>FS</button>
    <div style = {{
      width: '80vw',
      height: '60vh'
    }}>

      <Player videos = { videos } />
    </div>
    </>
  );
}

export default App;
