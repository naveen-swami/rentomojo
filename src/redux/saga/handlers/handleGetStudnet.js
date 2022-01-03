import requestGetStudnet from "../request/requestGetStudnet";
import {call,  put} from 'redux-saga/effects'
import { SET_STUDENT } from "../../reducer/studentReducer";

const setStudnet = (student) => ({
    type: SET_STUDENT,
    payload: {student}
});

function * handleGetStudnet() {
    try{
        const response = yield call(requestGetStudnet);
        const {data} = response;
        yield put(setStudnet(data));

    }catch{

    }
}

export default handleGetStudnet;