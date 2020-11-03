import { combineReducers } from 'redux';

const initialState = {
    heatmapon: false,
};
function showheat(state = initialState, action) {
    switch (action.type) {
        case 'HEAT':
            return {
                heatmapon: true,
            };
        case 'GAME':
            return {
                heatmapon: false,
            };
        default:
            return state;
    }
}

export default combineReducers({
    heatmapon: showheat,
});
