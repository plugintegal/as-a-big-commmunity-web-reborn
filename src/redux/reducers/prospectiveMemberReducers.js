const initialState = {
    prospectiveMember: {},
    prospectiveMemberError: null,
    prospectiveMemberLoading: true,
  };
  
  export const prospectiveMemberReducers = (
    state = initialState,
    { type, payload }
  ) => {
    switch (type) {
      case "POST_PROSPECTIVE_MEMBER":
        return { ...state, prospectiveMember: payload };
      case "POST_PROSPECTIVE_MEMBER_ERROR":
        return { ...state, prospectiveMemberError: payload };
      case "POST_PROSPECTIVE_MEMBER_LOADING":
        return { ...state, prospectiveMemberLoading: payload };
      default:
        return state;
    }
  };
  