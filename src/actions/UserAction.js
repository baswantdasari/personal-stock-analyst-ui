import axios from 'axios'
import { SAVE_USERNAME } from '../constants/ActionConstants'

const URL = ""

const saveUsername = (data) => ({
    type: SAVE_USERNAME,
    payload: data
})

export const authenticate = (username, password) => {

    let displayName = "";
    axios.get(URL + "/" + username + "/" + password).then((resp) => {
        displayName = resp.data.displayName;
        console.log(username);
    });


    return async dispatch => {
        dispatch(saveUsername(username));
    }
}