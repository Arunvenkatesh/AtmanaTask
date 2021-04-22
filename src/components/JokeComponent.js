import React, { Component } from 'react';
import map from "lodash/map";
import { jokeStyles } from "../styles/jokes.js"
import Category from "./Category"



class JokeComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            categoryList: [],
            isCategoryLoaded: false,
            selectedCat: "",
            randomJoke: {}
        }
        this.onCategoryClick = this.onCategoryClick.bind(this)
    }
    componentDidMount() {

        this.props.actions.getCategoryList((res) => {
            this.props.actions.getRandomJoke(res)
        })
    }
    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.jokeReducer && nextProps.jokeReducer.isCategoryLoaded !== prevState.isCategoryLoaded) {
            if (nextProps.jokeReducer && nextProps.jokeReducer.categoryList !== prevState.categoryList) {
                return ({
                    categoryList: nextProps.jokeReducer.categoryList,
                    isCategoryLoaded: nextProps.jokeReducer.isCategoryLoaded,
                    selectedCat: nextProps.jokeReducer.categoryList[0]
                }) // <- this is setState equivalent
            }

        }
        if (nextProps.jokeReducer.isRandomJokeLoaded === true) {
            if (nextProps.jokeReducer.randomJoke !== prevState.randomJoke) {
                return ({
                    isRandomJokeLoaded: nextProps.jokeReducer.isRandomJokeLoaded,
                    randomJoke: nextProps.jokeReducer.randomJoke


                }) // <- this is setState equivalent
            }
        }

        return null
    }
    onCategoryClick(e) {
        this.setState({
            selectedCat: e
        }, () => { this.props.actions.getRandomJoke(e) })
    }

    render() {
        return (
            <div style={jokeStyles.container}>
                {this.state.isCategoryLoaded && <div style={{
                    margin: "20px",
                    backgroundColor: "#ccc",
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                    height: "auto",
                    width: (window.innerWidth < 769) ? "87%" : "50%",
                    alignSelf: "center",
                    borderRadius: "5px"
                }}>
                    <Category datas={this.state.categoryList} onCatClick={(e) => { this.onCategoryClick(e) }} selectedCat={this.state.selectedCat} />
                </div>}
                {this.state.isRandomJokeLoaded &&
                    <div style={jokeStyles.jokeContainer}>
                        <p style={jokeStyles.selectedCat}>Selected Category : {this.state.selectedCat}</p>
                        <div style={{ width: (window.innerWidth < 769) ? "85%" : "50%", alignSelf: "center", backgroundColor: "#3395FF", borderRadius: "5px", padding: "50px 0px" }}>
                            <p style={jokeStyles.jokeLabel}>{this.state.randomJoke.value}</p>
                        </div>
                        <span style={jokeStyles.newJoke} onClick={() => { this.onCategoryClick(this.state.selectedCat) }}>New Joke</span>
                    </div>}
            </div>
        );
    }
}

export default JokeComponent;
