import {takeLatest} from 'redux-saga/effects'
import {GET_STUDENT} from '../reducer/studentReducer'
import handleGetStudnet from './handlers/handleGetStudnet'

export default  function* watcherSaga() {

    yield takeLatest(GET_STUDENT, handleGetStudnet);
}