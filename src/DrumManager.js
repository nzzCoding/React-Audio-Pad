import React from 'react';
import AudioBtn from './AudioBtn';
import Recorder from './Recorder';
import ManagerOptions from './ManagerOptions'
import {bank1, bank2} from './soundBank';

class Manager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            record: false,
            currentRec: [],

            tracks: [],
            currentTrack: null,//null when no track have been selected, otherwise an integer

            volume: 50,
            tempo: 100,

            bankId: 0
        };

        this.banks = [bank1, bank2];

        this.playSound = this.playSound.bind(this);
        this.switchRecord = this.switchRecord.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.selectTrack = this.selectTrack.bind(this);
        this.replayTrack = this.replayTrack.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.changeTempo = this.changeTempo.bind(this);
        this.switchBank = this.switchBank.bind(this);
    }

    playSound(event) {
        const audio_url = event.target.dataset.audio_url;
        const audio = new Audio(audio_url);
        audio.volume = (this.state.volume/100).toFixed(2);
        audio.play();

        if (this.state.record) {
            const sound_info = {
                audio_url: audio_url,
                time: Date.now()
            };
            this.setState((state) => ({currentRec: state.currentRec.concat(sound_info)}));
        }
    }

    switchRecord(event) {
        if (this.state.currentRec.length > 0 && !this.state.record) {
            //new record started, override current record
            this.setState((state) => ({currentRec: []}));
        }
        this.setState((state) => ({record: !state.record}));
    }

    addTrack(event) {
        if (this.state.currentRec.length > 0) {
            this.setState((state) => (
                {
                    tracks: state.tracks.concat([state.currentRec]),
                    currentRec: []
                })
            );
        }
    }

    selectTrack(event) {
        if (event.target.dataset.index != this.state.currentTrack) {
            //if the indices don't match a new track is selected, highlight it and update state
            this.setState((state) => (
                {currentTrack: event.target.dataset.index}
                )
            )
        } else {
            this.setState((state) => (
                {currentTrack: null}
                )
            );
        }
        
    }

    replayTrack(event) {
        if (this.state.currentTrack != null) {
            const track = this.state.tracks[this.state.currentTrack];
            //track is an array containing objects storing audio_url and time
            const initialTime = track[0].time;
            const timeStamp = track.map(
                (sound_info) => Math.ceil(
                    (sound_info.time - initialTime)/(this.state.tempo/100)
                    )
            );//timeStamp is an array containing the time at which each sound need to be played
            for (let i=0; i<track.length; i++) {
                let sound = new Audio(track[i].audio_url);
                sound.volume = (this.state.volume/100).toFixed(2);
                setTimeout(() => sound.play(), timeStamp[i]);
            }
        }
    }

    changeVolume(event) {
        this.setState((state) => (
            {volume: event.target.value}
        ));
    }

    changeTempo(event) {
        this.setState((state) => (
            {tempo: event.target.value}
        ));
    }

    switchBank(event) {
        this.setState((state) => (
            {bankId: (state.bankId > 0) ? 0 : 1}
        ))
    }

    render() {
        return (
        <div className="manager">
            <ManagerOptions
                volume={this.state.volume}
                tempo={this.state.tempo}
                switchBank={this.switchBank}
                changeVolume={this.changeVolume}
                changeTempo={this.changeTempo} />

            <div className="audio-pad">
                {/* Mapping the buttons to their corresponding audio*/}
                {this.banks[this.state.bankId]//current sound bank
                    .map((audio_url, index) => (
                        <AudioBtn
                            key={audio_url + index}
                            audio_url={audio_url}
                            volume={this.state.volume}
                            playSound={this.playSound} />
                        )
                    )
                }
            </div>

            <Recorder 
                record={this.state.record}
                switchRecord={this.switchRecord}
                addTrack={this.addTrack}
                selectTrack={this.selectTrack}
                replayTrack={this.replayTrack}
                tracks={this.state.tracks}
                currentTrack={this.state.currentTrack}/>
        </div>
        )
    }
}

export default Manager;