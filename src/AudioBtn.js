import React from 'react'

class AudioBtn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="audio-btn-wrap">
            <button 
                className="audio-btn" 
                data-audio_url={this.props.audio_url}
                onClick={this.props.playSound}>
                Play at {this.props.volume}
            </button>
        </div>
        )
    }
}

export default AudioBtn;