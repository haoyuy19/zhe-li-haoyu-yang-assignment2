import React from 'react';
import Cell from './Cell';
import HeatedCell from './HeatedCell';

class Grid extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        const width = this.props.cols * 19;
        var arr = [];
        // console.log(this.props.heatmapon);
        // eslint-disable-next-line react/prop-types
        for (var i = 0; i < this.props.rows; i++) {
            // eslint-disable-next-line react/prop-types
            for (var j = 0; j < this.props.cols; j++) {
                // eslint-disable-next-line react/prop-types
                var status = this.props.grid[i][j];
                // eslint-disable-next-line react/prop-types
                let aliveness = this.props.aliveness[i][j];
                // eslint-disable-next-line react/prop-types
                if (this.props.heatmapon) {
                    arr.push(
                        <HeatedCell
                            status={status}
                            aliveness={aliveness}
                            row={i}
                            col={j}
                            // eslint-disable-next-line react/prop-types
                            updateCell={this.props.updateCell}
                        />
                    );
                } else {
                    arr.push(
                        <Cell
                            status={status}
                            aliveness={aliveness}
                            row={i}
                            col={j}
                            // eslint-disable-next-line react/prop-types
                            updateCell={this.props.updateCell}
                        />
                    );
                }
            }
        }
        //console.log(arr);
        return (
            <div className="grid" style={{ width: width }}>
                {arr}
            </div>
        );
    }
}
export default Grid;
