import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/";
import { PropTypes } from "prop-types";

export default function JokeContainer(ComposedComponent) {
    class JokeContainer extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            jokeReducer: state.jokeReducer
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(ActionCreators, dispatch)
        };
    }
    return connect(mapStateToProps, mapDispatchToProps)(JokeContainer);
}

JokeContainer.contextTypes = {
    router: PropTypes.object
};