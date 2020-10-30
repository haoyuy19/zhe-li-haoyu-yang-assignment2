import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Router } from 'react-router-dom';

const CELL_SIZE = 20;
var WIDTH = 20;
var HEIGHT = 20;
export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/prop-types
        WIDTH = this.props.m;
        // eslint-disable-next-line react/prop-types
        HEIGHT = this.props.n;
        this.state = {
            color: 'black',
        };
        // console.log(WIDTH)
        // console.log(HEIGHT)
    }
    render() {
        var newColor = this.state.color;
        var cellStyle = {
            backgroundColor: newColor,
            height: '10px',
            width: '10px',
            border: '1px grey solid',
        };
        const tr = [
            // ['white', 'white', 'white', 'white'],
            // ['white', 'white', 'black', 'white'],
            // ['white', 'white', 'white', 'black'],
        ];

        for (let i = 0; i < WIDTH; i++) {
            const td = [];
            for (let j = 0; j < HEIGHT; j++) {
                // grid.push(col);
                td.push(
                    <td
                        style={cellStyle}
                        key={`${i},${j}`}
                        onClick={this.handleClick}
                    />
                );
            }
            tr.push(<tr key={i}>{td}</tr>);
        }
        return (
            <div>
                <table
                    style={{
                        borderCollapse: 'collapse',
                        margin: '0 auto 20px auto',
                    }}>
                    <tbody>{tr}</tbody>
                </table>
                <button>
                    <Link to="/"> Back </Link>
                </button>
            </div>
        );
        // <div style={gridStyle} onClick={this.handleClick} />;
        // return (
        // <div style={gridStyle} onClick={this.handleClick} />
        // <>
        //     {grid.map(function (cell) {
        //         return (
        //             <div
        //                 style={gridStyle}
        //                 onClick={() => this.handleClick.bind(this, cell)}
        //                 key={cell}
        //             />
        //         );
        //     })}
        // </>
        // );
    }

    handleClick = () => {
        if (this.state.color == 'black') {
            this.setState({ color: 'white' });
        } else {
            this.setState({ color: 'black' });
        }
    };
}
