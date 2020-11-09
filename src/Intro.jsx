import React from 'react';
import example from './img/example.gif';

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
                <img src={example}></img>
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
                    <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
                        {'  '}
                        Read more.
                    </a>
                </p>
                <p style={pStyle}>Rules For Life:</p>
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
                <p style={pStyle}>User Guide:</p>
                <ol style={lStyle}>
                    <li>
                        User can set the width and height for the game board.
                        The smallest possible grid should be 10 X 10 and the
                        biggest possible grid should be 100 X 100.
                    </li>
                    <li>Click initial to generate a random set of cells.</li>
                    <li>Click next to see the next generation.</li>
                    <li>Click start to start the simulation.</li>
                    <li>
                        Click pause to pause the simulation. User can click any
                        cell To reverse its state. For instance, if a cell is
                        dead and a user clicks on it, it should be marked as a
                        live.
                    </li>
                    <li>Click clear to reset the grid.</li>
                    <li>
                        Click Show Heat Map to see how recently a grid was
                        alive. When a cell is currently alive, it should be red.
                        When a cell has been dead for 10 or more iterations, it
                        should be white. The lighter the shade, the more acient
                        the cell.
                    </li>
                    <li>
                        Click Show Game Board to go back to the game
                        environment.
                    </li>
                    <li>
                        User can input the frequency of updates to this
                        simulation at the speed of choice. The frequency of a
                        generation can be between 50 to 2000ms. This value can
                        only be set when the simulation is NOT running.
                    </li>
                </ol>
                <a href="/">Back to game</a>
            </div>
        );
    }
}

export default Intro;
