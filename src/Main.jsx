import React from 'react';
import Grid from './Grid';
var width;
var height;
var userSpeed;

class Main extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/prop-types
        if (this.props.m != null) {
            for (var i = 0; i <= 100; i++) {
                // eslint-disable-next-line react/prop-types
                if (i == this.props.m) {
                    width = i;
                }
            }
        } else {
            width = 50;
        }
        // eslint-disable-next-line react/prop-types
        if (this.props.n != null) {
            for (var j = 0; j <= 100; j++) {
                // eslint-disable-next-line react/prop-types
                if (j == this.props.n) {
                    height = j;
                }
            }
        } else {
            height = 30;
        }
        this.state = {
            speed: 300,
            paused: true,
            generation: 0,
            grid: Array(width)
                .fill()
                // eslint-disable-next-line react/prop-types
                .map(() => Array(this.props.height).fill(false)),
            outofbound: false,
        };
        //console.log(width);
    }

    // outofbound = (m, n) => {
    //     this.setState({
    //         grid: [],
    //     });
    // };

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

    clear = () => {
        let copy = JSON.parse(JSON.stringify(this.state.grid));
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                copy[i][j] = false;
            }
        }

        this.setState({
            grid: copy,
            generation: 0,
        });
    };
    pause = () => {
        clearInterval(this.intervalId);
        this.setState({
            paused: true,
        });
    };

    play = () => {
        clearInterval(this.intervalId);
        this.setState({
            paused: false,
        });
        if (userSpeed != null) {
            this.intervalId = setInterval(this.next, userSpeed);
        } else {
            this.intervalId = setInterval(this.next, this.state.speed);
        }
    };

    next = () => {
        let hasChange = false;
        let neighborlive = 0;
        let copy = JSON.parse(JSON.stringify(this.state.grid));
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (i > 0) {
                    if (copy[i - 1][j] == true) {
                        neighborlive++;
                    }
                }
                if (j > 0) {
                    if (copy[i][j - 1] == true) {
                        neighborlive++;
                    }
                }
                if (j > 0 && i > 0) {
                    if (copy[i - 1][j - 1] == true) {
                        neighborlive++;
                    }
                }
                if (i < height - 1) {
                    if (copy[i + 1][j] == true) {
                        neighborlive++;
                    }
                }
                if (j < width - 1) {
                    if (copy[i][j + 1] == true) {
                        neighborlive++;
                    }
                }
                if (i < height - 1 && j < width - 1) {
                    if (copy[i + 1][j + 1] == true) {
                        neighborlive++;
                    }
                }
                if (i > 0 && j < width - 1) {
                    if (copy[i - 1][j + 1] == true) {
                        neighborlive++;
                    }
                }
                if (i < height - 1 && j > 0) {
                    if (copy[i + 1][j - 1] == true) {
                        neighborlive++;
                    }
                }
                if (copy[i][j] == true) {
                    if (neighborlive == 2 || neighborlive == 3) {
                        copy[i][j] = true;
                    } else {
                        hasChange = true;
                        copy[i][j] = false;
                    }
                    //console.log(neighborlive);
                    neighborlive = 0;
                    continue;
                }
                if (copy[i][j] == false) {
                    if (neighborlive == 3) {
                        hasChange = true;
                        copy[i][j] = true;
                    }
                    //console.log(neighborlive);
                    neighborlive = 0;
                    continue;
                }
            }
        }
        var incre = hasChange ? 1 : 0;
        this.setState({
            grid: copy,
            generation: this.state.generation + incre,
        });
        if (!hasChange) {
            this.pause();
        }
    };

    outofbound = () => {
        if (width > 10 && width < 100 && height > 10 && height < 100) {
            return (
                <Grid
                    grid={this.state.grid}
                    rows={height}
                    cols={width}
                    updateCell={this.updateCell}
                />
            );
        } else {
            return <div> Your input is out of bound </div>;
        }
    };

    myChangeHandlerspeed = event => {
        userSpeed = event.target.value;

        console.log(event.target.value + ' ' + this.state.speed);
        this.setState({
            speed: userSpeed,
        });
    };

    componentDidMount() {
        this.enterSpeed;
    }

    enterSpeed = () => {
        if (this.state.paused) {
            return (
                <div>
                    <p>Speed of your choice (50 - 2000)</p>
                    <input type="text" onChange={this.myChangeHandlerspeed} />
                </div>
            );
        } else {
            return (
                // document.getElementbyId("anyid").innerHTML = score;
                <div>
                    <p>Current speed</p>
                    <div dangerouslySetInnerHTML={{ __html: userSpeed }} />
                </div>
            );
        }
    };

    render() {
        //console.log(this.state);
        var buttonStyle = {
            margin: '20px',
        };
        console.log(this.state.paused);

        return (
            <div>
                <h2>Generations: {this.state.generation}</h2>
                <this.outofbound />
                <button style={buttonStyle} type="button" onClick={this.init}>
                    initial
                </button>
                <button style={buttonStyle} type="button" onClick={this.next}>
                    next
                </button>
                <button style={buttonStyle} type="button" onClick={this.play}>
                    start
                </button>
                <button style={buttonStyle} type="button" onClick={this.pause}>
                    pause
                </button>
                <button style={buttonStyle} type="button" onClick={this.clear}>
                    clear
                </button>
                <this.enterSpeed></this.enterSpeed>
            </div>
        );
    }
}

export default Main;
