const initialState = {
    events : [],
    eventError : null,
    eventLoading : true,
    eventDetail : {},
    eventDetailError : null,
    eventDetailLoading : true
}

export const eventReducers = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'FETCH_EVENTS' :
            return {...state, events: payload}
        case 'FETCH_EVENT_ERROR' :
            return {...state, eventError : payload}
        case 'FETCH_EVENT_LOADING' :
            return {...state, eventLoading : payload}
        case 'FETCH_EVENT_DETAIL' :
            return {...state, eventDetail : payload}
        case 'FETCH_EVENT_DETAIL_ERROR' :
            return {...state, eventDetailError: payload}
        case 'FETCH_EVENT_DETAIL_LOADING':
            return {...state, eventDetailLoading : payload}
        default: 
            return state
    }
}