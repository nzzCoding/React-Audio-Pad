import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic} from '@fortawesome/free-solid-svg-icons';

class ManagerOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="audio-pad-options">
                <div className="range-options">
                    <label className="volume-range">
                        <input 
                            type="range" min="0" max="100" 
                            onChange={this.props.changeVolume} />
                            Volume
                    </label>
                    <label className="tempo-range">
                        <input
                            type="range" min="25" max="400"
                            onChange={this.props.changeTempo} />
                            Tempo
                    </label>
                </div>
                <button className="bank-options" 
                        title="switch audio bank"
                        onClick={this.props.switchBank}>
                    <FontAwesomeIcon icon={faMusic} />
                </button>
            </div>
        )
    }
}

export default ManagerOptions