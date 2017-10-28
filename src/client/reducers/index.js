import { GENRES } from '../constants'
import {getSongs, SONGS_RECEIVED_ACTION_TYPE} from '../actionCreators'

const defaultState = {
    count: 5,
    songs: [],
    songIndex: 1,
    genres: GENRES
};

const rootReducer = (state=defaultState, action) =>  {
    if (action.type === 'INCREMENT_COUNTER') {
        return {
            ...state,
            count: state.count + 1
        };
    }

    if (action.type === SONGS_RECEIVED_ACTION_TYPE) {
        return {
            ...state,
            songs: state.songs.concat(action.payload.collection)
        };
    }

    return state;
};

export default rootReducer