import React from 'react';
import Cell from './Cell';
import HeatedCell from './HeatedCell';

class Grid extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        const width = this.props.cols * 19;
        // eslint-disable-next-line react/prop-types
        const height = this.props.rows * 19;
        var cellStyle = {
            height: height,
            width: width,
            lineHeight: '0',
            margin: 'auto',
            boxShadow: '0px 0px 20px white',
            marginTop: '20px',
        };
        var arr = [];

        var status;
        // eslint-disable-next-line react/prop-types
        //console.log(this.props.cols);
        // eslint-disable-next-line react/prop-types
        for (var i = 0; i < this.props.rows; i++) {
            // eslint-disable-next-line react/prop-types
            for (var j = 0; j < this.props.cols; j++) {
                // eslint-disable-next-line react/prop-types
                status = this.props.grid[i][j];
                // eslint-disable-next-line react/prop-types
                let aliveness = this.props.aliveness[i][j];
                // eslint-disable-next-line react/prop-types
                if (this.props.isheat) {
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
            // eslint-disable-next-line react/prop-types
            // console.log(this.props.grid[i]);
            //console.log(i);
        }
        //console.log(arr);
        return <div style={cellStyle}>{arr}</div>;
    }
}

export default Grid;
