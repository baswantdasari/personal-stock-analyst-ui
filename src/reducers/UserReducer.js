import {SAVE_USERNAME} from '../constants/ActionConstants';

const initialState = {
    userName: "",
    displayName: "",
}

const UserReducer = (state = initialState, action) => {

    switch (action) {
        case SAVE_USERNAME:

            break;

        default:
            return state;
    }



}

export default UserReducer