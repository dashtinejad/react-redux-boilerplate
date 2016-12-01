// React
import React from 'react';
import ReactDOM from 'react-dom';


// Redux
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { compose } from 'redux';
import { combineReducers } from 'redux';


// React-Redux
import { connect } from 'react-redux';
import { Provider } from 'react-redux';


// Redux Saga
import createSagaMiddleware from 'redux-saga';


// Initial State
import * as initialState from './app/initialState.js';


// App
import App from './app/App.jsx';

// sagas (ajax requests)
import rootSagas from './app/rootSagas.js';


// outsideWorld
// here we control elements outside the react World
// for example `document.title`
// or something else inside the header or footer
import outsideWorld from './app/outsideWorld';


// reducers
import universalMessageReducer from './UniversalMessage/actions';

// Redux Middlewares
const sagaMiddleware = createSagaMiddleware();

/*
const universalMessageReducer = (state = initialState.UniversalMessage, action) => {
    switch (action.type) {
        case 'UniversalMessage/Update':
            return action.payload.message;

        default:
            return state;
    }
};
*/



const enhancer = compose(
    applyMiddleware(sagaMiddleware),

    // for development, enable Redux Chrome Extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const reducer = combineReducers({
    UniversalMessage: universalMessageReducer,
});


let store = createStore(
    reducer,
    enhancer
);

const render = () => {
    outsideWorld(store.getState());

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );
};

render();

store.subscribe(render);

sagaMiddleware.run(rootSagas);