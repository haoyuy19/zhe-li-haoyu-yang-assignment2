import React from 'react';
import Grid from './Grid';
var width;
var height;
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.speed = 100;
        // eslint-disable-next-line react/prop-types
        if (this.props.m != null) {
            for (var i = 0; i <= 1000; i++) {
                // eslint-disable-next-line react/prop-types
                if (i == this.props.m) {
                    width = i;
                }
            }
        } else {
            width = 30;
        }
        // eslint-disable-next-line react/prop-types
        if (this.props.n != null) {
            for (var j = 0; j <= 1000; j++) {
                // eslint-disable-next-line react/prop-types
                if (j == this.props.n) {
                    height = j;
                }
            }
        } else {
            height = 30;
        }
        this.state = {
            generation: 0,
            grid: Array(width)
                .fill()
                // eslint-disable-next-line react/prop-types
                .map(() => Array(this.props.height).fill(false)),
        };
        //console.log(width);
    }

    updateCell = (i, j) => {
        let copy = JSON.parse(JSON.stringify(this.state.grid));
        copy[i][j] = !copy[i][j];
        this.setState({
            grid: copy,
        });
    };

    init = () => {
        let copy = JSON.parse(JSON.stringify(this.state.grid));
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                copy[i][j] = false;
                if (Math.random() <= 0.05) {
                    copy[i][j] = true;
                }
            }
        }

        this.setState({
            grid: copy,
        });
    };

    render() {
        //console.log(this.state);
        return (
            <div>
                <Grid
                    grid={this.state.grid}
                    rows={height}
                    cols={width}
                    updateCell={this.updateCell}
                />
                <button type="button" onClick={this.init}>
                    init
                </button>
                <h2>Generations: {this.state.generation}</h2>
            </div>
        );
    }
}

export default Main;
