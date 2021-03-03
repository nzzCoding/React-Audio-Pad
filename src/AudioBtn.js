import React from 'react'

class AudioBtn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="audio-pad">
            <button className="audio-btn" data-audio_url={this.props.audio_url}>
                Play at {this.props.volume}
            </button>
        </div>
        )
    }
}

export default AudioBtn;