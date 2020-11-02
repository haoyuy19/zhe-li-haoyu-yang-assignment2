import React from 'react';
import Cell from './Cell';
class Grid extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        const width = this.props.cols * 19;
        var cellStyle = {
            width: width,
            lineHeight: '0',
            margin: 'auto',
            boxShadow: '0px 0px 20px white',
            marginTop: '20px',
        };
        var arr = [];

        // eslint-disable-next-line react/prop-types
        for (var i = 0; i < this.props.rows; i++) {
            // eslint-disable-next-line react/prop-types
            for (var j = 0; j < this.props.cols; j++) {
                // eslint-disable-next-line react/prop-types
                var status = this.props.grid[i][j];
                arr.push(
                    <Cell
                        status={status}
                        row={i}
                        col={j}
                        // eslint-disable-next-line react/prop-types
                        updateCell={this.props.updateCell}
                    />
                );
            }
        }
        //console.log(arr);
        return (
            <div className="grid" style={cellStyle}>
                {arr}
            </div>
        );
    }
}
export default Grid;
