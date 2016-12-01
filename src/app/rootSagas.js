import universalMessageSagas from '../UniversalMessage/sagas.js';

export default function* rootSaga() {
    yield [
        universalMessageSagas(),
    ]
}