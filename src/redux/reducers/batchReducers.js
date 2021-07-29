const initialState = {
  batch: [],
  batchError: null,
  batchLoading: true,
};

export const batchReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_BATCH":
      return { ...state, batch: payload };
    case "FETCH_BATCH_ERROR":
      return { ...state, batchError: payload };
    case "FETCH_BATCH_LOADING":
      return { ...state, batchLoading: payload };
    default:
      return state;
  }
};
