import React from 'react';

class HeatedCell extends React.Component {
    render() {
        var heat;
        // eslint-disable-next-line react/prop-types
        heat = this.props.aliveness;
        var cellStyle = {
            display: 'inline-block',
            border: '2px solid gray',
            width: '15px',
            height: '15px',
            background: `rgba(255, 0, 0, ${heat})`,
        };

        return (
            <div
                style={cellStyle}
                onClick={this.updateCell}></div>
        );
    }
}
export default HeatedCell;
