import * as types from './actionTypes';


export function loadEvents(id) {
    return {
        type: [types.EVENTS_LOAD, types.EVENTS_LOAD_SUCCESS, types.EVENTS_LOAD_FAILURE],
        promise: (sdk) => sdk.getEvents(id),
        loader: true
    };
}

export function setCurrentEvent(id) {
    return {
        type: types.SET_CURRENT_EVENT,
        id
    };
}
