import React from 'react';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({});

let actionCreators = {};

actionCreators.changeUniversalMessage = () => ({
    type: 'UNIVERSAL',
});

actionCreators.loadTodo = (todoId) => {
    return dispatch => fetch(`http://www.google.com/`)
        // .then(res => res.json())
        .then(
            data => dispatch({ type: 'GET_TODO', payload: { id: todoId } }),
            err => dispatch({ type: 'GET_TODO', payload: { id: todoId } }),
        );
};

class UniversalComponent extends React.Component {
    render() {
        // return <button onClick={this.props.changeUniversalMessage}>Universal Button</button>;
        return <button onClick={() => this.props.loadTodo(5)}>Universal Button</button>;
    }
}

let UniversalComponentConnected = connect(mapStateToProps, actionCreators)(UniversalComponent);

class DetailComponent extends React.Component {
    render() {
        console.log(this.props);

        if (! this.props.todo) {
            return <div>
                <i>(Please choose a note)</i>
                <div><small>{this.props.universalMessage}</small></div>
            </div>;
        }

        return (
            <div>
                <h1>Note Detail</h1>
                <h1>
                    <code>[{this.props.todo.id}]</code>
                </h1>
                <div>{this.props.todo.title}</div>

                <hr />

                <UniversalComponentConnected />
            </div>
        );
    }
}



export default connect(mapStateToProps, actionCreators)(DetailComponent);