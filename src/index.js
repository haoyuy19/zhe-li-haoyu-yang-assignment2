import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    heatmapon: false,
    count: 0,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'HEAT':
            return {
                heatmapon: true,
                count: state.count,
            };
        case 'GAME':
            return {
                heatmapon: false,
                count: state.count,
            };
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'RESET':
            return {
                count: 0,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log(store.getState());
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MainPage />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
