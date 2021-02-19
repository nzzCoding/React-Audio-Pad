import logo from './logo.svg';
import './App.css';
import Manager from './DrumManager';
import AudioBtn from './AudioBtn';
import Recorder from './Recorder'

function App() {
  return (
    <div className="App">
      <Manager>
        <AudioBtn />
        <AudioBtn />
        <AudioBtn />
        <AudioBtn />
        <AudioBtn />
        <AudioBtn />
        <AudioBtn />
        <AudioBtn />
        <AudioBtn />
        <Recorder />
      </Manager>
    </div>
  );
}

export default App;
