import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Link, Switch } from 'react-router-dom';
import Main from './Main';
import { connect } from 'react-redux';

var newm;
var newn;
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            m: 0,
        };
        this.state = {
            n: 0,
        };
    }

    myChangeHandlerform = event => {
        newm = event.target.value;
        this.setState({ m: newm });
        // console.log(this.state.m);
    };
    myChangeHandlerforn = event => {
        newn = event.target.value;
        this.setState({ n: event.target.value });
    };

    onsubmitm = m => {
        this.setState.m({ m });
    };
    onsubmitn = n => {
        this.setState.n({ n });
    };

    render() {
        const styleform = {
            //   width: "50%",
            //   display:"block",
            margin: 'auto',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
        };

        return (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <form style={styleform}>
                <h1>Conways History of Life</h1>
                {/* <button> */}
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={MainPage}>
                                <p>Enter width:</p>
                                <input
                                    type="text"
                                    onChange={this.myChangeHandlerform}
                                />
                                <p>Enter height:</p>
                                <input
                                    type="text"
                                    onChange={this.myChangeHandlerforn}
                                />
                                <div>
                                    <button style={{ margin: '5px' }}>
                                        <Link to="/grid"> Submit </Link>
                                    </button>
                                </div>
                            </Route>
                            <Route path="/grid" component={Main}>
                                {/* <Cell m = {this.state.m}/> */}
                                <Main n={newn} m={newm} />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                    {/* <Cell m = {this.state.m}/> */}
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        heatmapon: state.heatmapon,
    };
}

export default connect(mapStateToProps)(MainPage);
