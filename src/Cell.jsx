import React from 'react';
class Cell extends React.Component {
    updateCell = () => {
        // eslint-disable-next-line react/prop-types
        this.props.updateCell(this.props.row, this.props.col);
    };
    render() {
        var color;
        //console.log(this.props.cell);
        // eslint-disable-next-line react/prop-types
        if (this.props.status) {
            color = 'white';
        } else {
            color = 'black';
        }
        var cellStyle = {
            display: 'inline-block',
            border: '2px solid gray',
            width: '15px',
            height: '15px',
            backgroundColor: color,
        };
        return (
            <div
                style={cellStyle}
                onClick={this.updateCell}></div>
        );
    }
}
export default Cell;
