import * as types from "../constants/actionTypes";
import * as API_END_POINTS from "../constants/apiEndPoints";
import axios from "axios";





export function getCategoryList(callback) {

    return dispatch => {

        axios.get(API_END_POINTS.GET_CATEGORY_LIST, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(async response => {
                if (response.status === 200) {
                    callback && callback(response.data[0]);

                    dispatch({
                        type: types.GET_CATEGORY_LIST,
                        isCategoryLoaded: true,
                        categoryList: response.data
                    });
                } else {

                    dispatch({
                        type: types.GET_CATEGORY_LIST,
                        isCategoryLoaded: false
                    });
                }
            })
            .catch(err => {

                if (err && err.config) {
                    dispatch({
                        type: types.GET_CATEGORY_LIST,
                        isCategoryLoaded: false
                    });
                }
            });
    };
}
export function getRandomJoke(category) {

    return dispatch => {

        axios.get(API_END_POINTS.GET_RANDOM_JOKE + category, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(async response => {
                if (response.status === 200) {

                    dispatch({
                        type: types.GET_RANDOM_JOKE,
                        isRandomJokeLoaded: true,
                        randomJoke: response.data
                    });
                } else {

                    dispatch({
                        type: types.GET_RANDOM_JOKE,
                        isRandomJokeLoaded: false
                    });
                }
            })
            .catch(err => {

                if (err && err.config) {
                    dispatch({
                        type: types.GET_RANDOM_JOKE,
                        isRandomJokeLoaded: false
                    });
                }
            });
    };
}