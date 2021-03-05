import React from 'react'

class ManagerOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="audio-pad-options">
                <button className="bank-choice" onClick={this.props.switchBank}>
                    Switch bank
                </button>
                <label className="volume-range">
                    Set volume
                    <input 
                        type="range" min="0" max="100" 
                        onChange={this.props.changeVolume} />
                </label>
                <label className="tempo-range">
                    Set tempo
                    <input
                        type="range" min="25" max="400"
                        onChange={this.props.changeTempo} />
                </label>
            </div>
        )
    }
}

export default ManagerOptions