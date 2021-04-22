import React from 'react';
import PropTypes from "prop-types";
import { jokeStyles } from "../styles/jokes.js";
import map from "lodash/map";






const Category = ({ onCatClick, datas, selectedCat }) => {

    return (
        map(datas, catName => {
            debugger
            return (<span style={{
                backgroundColor: (selectedCat == catName) ? "#3395FF" : "#fff",
                textAlign: "center",
                margin: "10px 5px 10px 10px",
                padding: "5px 10px",
                borderRadius: "5px",
                textTransform: "capitalize",
                fontSize: "16px",
                boxShadow: "1px 1px 10px 1px #979797"
            }} onClick={(e) => { onCatClick(catName) }}>{catName}</span>)
        }))

}

Category.propTypes = {

    datas: PropTypes.array

};

export default Category