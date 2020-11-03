import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import Main from './Main';
import showheat from './reducers/heatmap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// const initialState = {
//     heatmapon: false,
// };
// function showheat(state = initialState, action) {
//     switch (action.type) {
//         case 'HEAT':
//             return {
//                 heatmapon: true,
//             };
//         case 'GAME':
//             return {
//                 heatmapon: false,
//             };
//         default:
//             return state;
//     }
// }

// const store = createStore(showheat);
const store = createStore(showheat);

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
