import React from 'react';
import AudioBtn from './AudioBtn';
import Recorder from './Recorder';
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
        this.addTrack = this.addTrack.bind(this);
        this.selectTrack = this.selectTrack.bind(this);
    }

    playSound(event) {

    }

    switchRecord(event) {

    }

    addTrack(event) {

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
            this is the manager component
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
        )
    }
}

export default Manager;