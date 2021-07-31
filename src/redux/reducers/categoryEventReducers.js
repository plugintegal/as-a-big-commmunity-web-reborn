const initialState = {
    categories : [],
    categoryError : null,
    categoryLoading : true,
    categoryDetail : {},
    categoryDetailError : null,
    categoryDetailLoading : true
}

export const categoryEventReducers = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'FETCH_CATEGORIES' :
            return {...state, categories: payload}
        case 'FETCH_CATEGORY_ERROR' :
            return {...state, categoryError : payload}
        case 'FETCH_CATEGORY_LOADING' :
            return {...state, categoryLoading : payload}
        default: 
            return state
    }
}