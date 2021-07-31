import { instance, instanceMedium } from "../../config/axios";

export const fetchEvents = () => {
  return (dispatch) => {
    instance
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
    instance
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

export const fetchBatch = () => {
  return (dispatch) => {
    instance
      .get("batch")
      .then(({ data }) => {
        return dispatch({ type: "FETCH_BATCH", payload: data.data });
      })
      .catch((error) => {
        return dispatch({ type: "FETCH_BATCH_ERROR", payload: error });
      })
      .finally(() => {
        return dispatch({ type: "FETCH_BATCH_LOADING", payload: false });
      });
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    instance
      .get("category-events")
      .then((data) => {
        return dispatch({ type: "FETCH_CATEGORIES", payload: data.data.data });
      })
      .catch((error) => {
        return dispatch({ type: "FETCH_CATEGORY_ERROR", payload: error });
      })
      .finally(() => {
        return dispatch({ type: "FETCH_CATEGORY_LOADING", payload: false });
      });
  };
};

export const postParticipant = (data) => {
  return (dispatch) => {
    instance
      .post("participant", data)
      .then(({ data }) => {
        alert('Success Daftar')
        return dispatch({ type: "POST_PARTICIPANT", payload: data.data });
      })
      .catch((error) => {
        alert('Failed Daftar ', error.response)
        return dispatch({ type: "POST_PARTICIPANT_ERROR", payload: error });
      })
      .finally(() => {
        return dispatch({ type: "POST_PARTICIPANT_LOADING", payload: false });
      });
  };
};

export const fetchBlogs = () => {
  return (dispatch) => {
    instanceMedium
      .get("api.json?rss_url=https://medium.com/feed/plugin-id")
      .then(({ data }) => {
        return dispatch({ type: "FETCH_BLOG", payload: data.items });
      })
      .catch((error) => {
        return dispatch({ type: "FETCH_BLOG_ERROR", payload: error });
      })
      .finally(() => {
        return dispatch({ type: "FETCH_BLOG_LOADING", payload: false });
      });
  };
};

export const fetchSquads = () => {
  return (dispatch) => {
    instance
      .get("squad")
      .then(({ data }) => {
        return dispatch({ type: "FETCH_SQUAD", payload: data.data });
      })
      .catch((error) => {
        return dispatch({ type: "FETCH_SQUAD_ERROR", payload: error });
      })
      .finally(() => {
        return dispatch({ type: "FETCH_SQUAD_LOADING", payload: false });
      });
  };
};

export const fetchSquadDetail = (id, batch_id) => {
  const batch = batch_id == null ? ' ' : batch_id;
  console.log("squad/"+id + batch)
  return (dispatch) => {
    instance
      .get("squad/"+id + batch)
      .then(({ data }) => {
        return dispatch({ type: "FETCH_SQUAD_DETAIL", payload: data.data });
      })
      .catch((error) => {
        return dispatch({ type: "FETCH_SQUAD_DETAIL_ERROR", payload: error });
      })
      .finally(() => {
        return dispatch({ type: "FETCH_SQUAD_DETAIL_LOADING", payload: false });
      });
  };
}