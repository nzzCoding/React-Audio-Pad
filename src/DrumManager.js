import React from 'react';
//import AudioBtn from './AudioBtn'

class Manager extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="manager">
            this is the manager component
            {this.props.children}
        </div>
        )
    }
}

export default Manager;