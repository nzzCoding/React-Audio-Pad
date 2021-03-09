import React from 'react'

class ManagerOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="audio-pad-options">
                <div className="range-options">
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
                <button className="bank-options" onClick={this.props.switchBank}>
                    Switch bank
                </button>
            </div>
        )
    }
}

export default ManagerOptions