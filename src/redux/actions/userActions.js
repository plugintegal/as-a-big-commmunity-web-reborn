import axios from "../../config/axios";

export const fetchEvents = () => {
  return (dispatch) => {
    axios
      .get("events")
      .then(({ data }) => {
        return dispatch({ type: "FETCH_EVENTS", payload: data.data });
      })
      .catch((error) => {
        return dispatch({ type: "FETCH_EVENT_ERROR", payload: error });
      })
      .finally(() => {
        return dispatch({ type: "FETCH_EVENT_LOADING", payload: false });
      });
  };
};

export const fetchEventDetail = (evenId) => {
  return (dispatch) => {
    axios
      .get(`events/${evenId}`)
      .then(({ data }) => {
        return dispatch({ type: "FETCH_EVENT_DETAIL", payload: data.data });
      })
      .catch((error) => {
        return dispatch({ type: "FETCH_EVENT_DETAIL_ERROR", payload: error });
      })
      .finally(() => {
        return dispatch({ type: "FETCH_EVENT_DETAIL_LOADING", payload: false });
      });
  };
};
