const initialState = {
    blogs : [],
    blogError : null,
    blogLoading : true,
}

export const blogReducers = (state = initialState, {type, payload})  => {
    switch (type) {
        case "FETCH_BLOG":
          return { ...state, blogs: payload };
        case "FETCH_BLOG_ERROR":
          return { ...state, blogError: payload };
        case "FETCH_BLOG_LOADING":
          return { ...state, blogLoading: payload };
        default:
          return state;
      }   
}