import axios from '../../config/axios';

export const fetchEvents = () => {
    return (dispatch) => {
        axios
        .get('events')
        .then(({data}) => {
            return dispatch({type : 'FETCH_EVENTS', payload: data.data})
        })
        .catch((error) => {
            return dispatch({type : 'FETCH_EVENT_ERROR', payload: error})
        })
        .finally(() => {
            return dispatch({type : 'FETCH_EVENT_LOADING', payload: false})
        })
    }
}