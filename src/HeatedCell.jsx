import React from 'react';

class HeatedCell extends React.Component {
    updateCell = () => {
        // eslint-disable-next-line react/prop-types
        this.props.updateCell(this.props.row, this.props.col);
    };
    render() {
        var heat;
        // eslint-disable-next-line react/prop-types
        heat = this.props.aliveness;
        console.log(heat);
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
                className="cell"
                onClick={this.updateCell}></div>
        );
    }
}
export default HeatedCell;
