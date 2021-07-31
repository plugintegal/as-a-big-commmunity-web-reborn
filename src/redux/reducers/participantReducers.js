const initialState = {
  participant: {},
  participantError: null,
  participantLoading: true,
};

export const participantReducers = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case "POST_PARTICIPANT":
      return { ...state, participant: payload };
    case "POST_PARTICIPANT_ERROR":
      return { ...state, participantError: payload };
    case "POST_PARTICIPANT_LOADING":
      return { ...state, participantLoading: payload };
    default:
      return state;
  }
};
