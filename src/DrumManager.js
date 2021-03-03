import React from 'react';
//import AudioBtn from './AudioBtn'

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
        this.banks = [];
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
        </div>
        )
    }
}

export default Manager;