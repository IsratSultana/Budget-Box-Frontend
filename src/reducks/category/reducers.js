import initialState from '../store/initialstate'

import * as Actions from './actions';

export const categoriesReducer = (state= initialState.categories, action) => {
switch (action.type) {
    case Actions.FETCH_CATEGORIES:
        return{
            ...state,
            results:[...action.payload.categories]

        }

    default:
        return state;
}
}

