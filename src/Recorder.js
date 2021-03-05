import React from 'react';

class Recorder extends React.Component {
    render() {
        const record_msg = (this.props.record) ? "stop" : "start" //the msg to be prompted in button
        return (
            <div>
                this is the recorder
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
            </div>
        )
    }
}

export default Recorder;