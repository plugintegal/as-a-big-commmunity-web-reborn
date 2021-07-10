const initialState = {
    events : [],
    eventError : null,
    eventLoading : true
}

export const eventReducers = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'FETCH_EVENTS' :
            return {...state, events: payload}
        case 'FETCH_EVENT_ERROR' :
            return {...state, eventError : payload}
        case 'FETCH_EVENT_LOADING' :
            return {...state, eventLoading : payload}
        default: 
            return state
    }
}