import React from 'react';

function TrackList(props) {
    return (
        <div className="track-list">
            {props.tracks.map((tracks, index) => (
                <p 
                    key={"track" + index} 
                    data-index={index}
                    onClick={props.selectTrack}>
                    track {index} {(index == props.currentTrack) ? "selection" : null}
                </p>
                )
            )}
        </div>
    )
}

class Recorder extends React.Component {
    render() {
        const record_msg = (this.props.record) ? "stop" : "start" //the msg to be prompted in button
        return (
            <div>
                <button
                    className="record-btn"
                    onClick={this.props.switchRecord}>
                        {record_msg} recording
                </button>
                <button
                    className="add-track-btn"
                    onClick={this.props.addTrack}>
                        add the recorded track
                </button>
                <TrackList 
                    tracks={this.props.tracks}
                    currentTrack={this.props.currentTrack}
                    selectTrack={this.props.selectTrack} />
                <button
                    className="replay-btn"
                    onClick={this.props.replayTrack}>
                        replay the selected track
                    </button>
            </div>
        )
    }
}

export default Recorder;