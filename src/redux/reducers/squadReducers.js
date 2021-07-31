const initialState = {
  squads: [],
  squadError: null,
  squadLoading: true,
  squadDetail: {},
  squadDetailError: null,
  squadDetailLoading: true,
};

export const squadReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_SQUAD":
      return { ...state, squads: payload };
    case "FETCH_SQUAD_ERROR":
      return { ...state, squadError: payload };
    case "FETCH_SQUAD_LOADING":
      return { ...state, squadLoading: payload };
    case "FETCH_SQUAD_DETAIL":
      return { ...state, squadDetail: payload };
    case "FETCH_SQUAD_DETAIL_ERROR":
      return { ...state, squadDetailError: payload };
    case "FETCH_SQUAD_DETAIL_LOADING":
      return { ...state, squadDetailLoading: payload };
    default:
      return state;
  }
};
