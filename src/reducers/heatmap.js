const initialState = {
    heatmapon: false,
};
export default function showheat(state = initialState, action) {
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
