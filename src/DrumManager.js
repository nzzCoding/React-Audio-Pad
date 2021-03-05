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
            currentTrack: null,

            volume: 50,
            tempo: 1,

            bankId: 0
        };
        this.banks = [bank1, bank2];
        this.playSound = this.playSound.bind(this);
        this.switchRecord = this.switchRecord.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.selectTrack = this.selectTrack.bind(this);
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

    }

    changeVolume(event) {

    }

    changeTempo(event) {

    }

    switchBank(event) {

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
            
            <Recorder 
                record={this.state.record}
                switchRecord={this.switchRecord}
                addTrack={this.addTrack}
                selectTrack={this.selectTrack}
                currentTrack={this.state.currentTrack}
                volume={this.state.volume}
                tempo={this.state.tempo} />
            record: {this.state.currentRec.length}<br />
            number of tracks: {this.state.tracks.length}
        </div>
        )
    }
}

export default Manager;