import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircle, faStop, faPlus} from '@fortawesome/free-solid-svg-icons';

function TrackList(props) {
    return (
        <div className="track-list">
            <h4 className="track-header">Recorded tracks</h4>
            {props.tracks.map((tracks, index) => (
                <p
                    key={"track" + index} 
                    className={(index == props.currentTrack) ? "track selected" : "track"}
                    data-index={index}
                    onClick={props.selectTrack}>
                    track {index}
                </p>
                )
            )}
        </div>
    )
}

class Recorder extends React.Component {
    render() {
        const [record_icon, record_status] = (this.props.record) ? //the icon to be prompted in button
                                             [(<FontAwesomeIcon icon={faStop} />), "stop"] :
                                             [(<FontAwesomeIcon icon={faCircle} />), "start"];
        return (
            <div className="recorder">
                <button
                    className="record-btn"
                    title={record_status + " recording"}
                    onClick={this.props.switchRecord}>
                    {record_icon}
                </button>
                <button
                    className="add-track-btn"
                    title="add recorded track"
                    onClick={this.props.addTrack}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                    className="replay-btn"
                    title="replay selected track"
                    onClick={this.props.replayTrack}>
                    <FontAwesomeIcon icon={faPlay} />
                </button>
                <TrackList 
                    tracks={this.props.tracks}
                    currentTrack={this.props.currentTrack}
                    selectTrack={this.props.selectTrack} />
            </div>
        )
    }
}

export default Recorder;