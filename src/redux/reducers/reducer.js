import { CHANGE_SEARCH_FIELD } from '../consts/consts'

const initialStateSearch = {
    searchField: ''
}

export const searchItems = (state=initialStateSearch, action={}) => {
    switch(action.types) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload} )
        default:
            return state;
    }
}