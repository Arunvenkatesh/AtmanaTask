import * as types from "../constants/actionTypes";


const initialState = {
    isRandomJokeLoaded: false,
    randomJoke: {},
    categoryList: [],
    isCategoryLoaded: false

}

export default function jokeList(state = initialState, action) {
    switch (action.type) {
        case types.GET_CATEGORY_LIST: {
            if (action.isCategoryLoaded) {
                return Object.assign({}, state, { categoryList: action.categoryList, isCategoryLoaded: true });

            }
            else {
                return Object.assign({}, state, { isCategoryLoaded: false });

            }
        }
        case types.GET_RANDOM_JOKE: {
            if (action.isRandomJokeLoaded) {
                return Object.assign({}, state, { randomJoke: action.randomJoke, isRandomJokeLoaded: true });

            }
            else {
                return Object.assign({}, state, { isRandomJokeLoaded: false });

            }
        }
        default:
            return state;
    }
}