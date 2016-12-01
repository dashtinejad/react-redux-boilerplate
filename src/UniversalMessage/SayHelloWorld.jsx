import React from 'react';

import { connect } from 'react-redux';

import { updateActionCreator } from './actions';
import { updateAsyncActionCreator } from './actions';

class SayHelloWorld extends React.Component {
    constructor() {
        super(...arguments);

        this.changeMessage = this.changeMessage.bind(this);
        this.changeMessageAsync = this.changeMessageAsync.bind(this);
    }

    changeMessage() {
        // let action = updateActionCreator('Hello World : ' + Date.now());
        // this.props.updateMessage(action);

        this.props.updateMessage('Hello World : ' + Date.now());
    }

    changeMessageAsync() {
        this.props.updateMessageAsync();
    }

    render() {
        return (
            <div>
                <button onClick={this.changeMessage}>SayHelloWorld</button>
                <button onClick={this.changeMessageAsync}>SayHelloWorld Async</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});
let actionCreators = {};
// actionCreators.updateMessage = action => action;

/*
actionCreators.updateMessage = function (message) {
    return updateActionCreator(message);
};
*/

actionCreators.updateMessage = message => updateActionCreator(message); 
actionCreators.updateMessageAsync = message => updateAsyncActionCreator(message);

export default connect(mapStateToProps, actionCreators)(SayHelloWorld);