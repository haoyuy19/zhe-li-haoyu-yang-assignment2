import React from 'react';

class Intro extends React.Component {
    constructor() {
        super();
    }
    render() {
        let pStyle = {
            textAlign: 'left',
        };
        let lStyle = {
            textAlign: 'left',
        };
        return (
            <div>
                <p style={pStyle}>
                    Conway’s Game of Life (henceforth, Life) is based on a grid
                    system. Every individual location on the grid can be
                    understood as a cell. The game, or simulation, occurs over
                    iterations, or generations. After a generation, a cell may
                    change from living or dead based on how many living or dead
                    neighbors it had in a previous iteration. A neighbor is any
                    immediately adjacent spot on the grid (horizontal, vertical
                    or diagonal). We can understand this more clearly with an
                    example and a clear demonstration of the rules.
                </p>
                <p style={pStyle}>Life has 4 simple rules:</p>
                <ol style={lStyle}>
                    <li>
                        A living cell with less than two living neighbours dies.
                    </li>
                    <li>
                        A living cell with two or three live neighbours lives.
                    </li>
                    <li>
                        A living cell with more than three live neighbours dies.
                    </li>
                    <li>
                        A dead cell with exactly three live neighbours becomes a
                        live cell, as if by reproduction.
                    </li>
                </ol>
            </div>
        );
    }
}

export default Intro;
