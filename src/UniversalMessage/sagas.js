import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'

// worker Saga: will be fired on GET_TODO_AJAX actions
function* fetchUser(action) {
    console.log(action);
   // yield put({type: "UniversalMessage/UpdateAsync/Loading"});

   try {
      const user = yield fetch('http://google.com/');
      yield put({type: "UniversalMessage/UpdateAsync/Succeeded", user: user});
   } catch (e) {
      yield put({type: "UniversalMessage/UpdateAsync/Failed", payload: { message: e.message }});
   }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "GET_TODO_AJAX" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield* takeLatest("UniversalMessage/UpdateAsync", fetchUser);
}

export default mySaga;