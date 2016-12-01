import * as initialState from '../app/initialState.js';

const UPDATE = 'UniversalMessage/Update';

const UPDATE_ASYNC = 'UniversalMessage/UpdateAsync';
const UPDATE_ASYNC_SUCCEEDED = 'UniversalMessage/UpdateAsync/Succeeded';
const UPDATE_ASYNC_FAILED = 'UniversalMessage/UpdateAsync/Failed';

export function updateActionCreator(message) {
    return {
        type: UPDATE,
        payload: { message }
    };
}

export function updateAsyncActionCreator() {
    return {
        type: UPDATE_ASYNC
    };
}

export default function reducer(state = initialState.UniversalMessage, action) {
    switch (action.type) {
        case UPDATE:
            return action.payload.message;

        case UPDATE_ASYNC:
            return 'LOADING>>>';

        case UPDATE_ASYNC_SUCCEEDED:
            return 'Succeeded';

        case UPDATE_ASYNC_FAILED:
            return 'Failed';

        default: return state;
    }
}