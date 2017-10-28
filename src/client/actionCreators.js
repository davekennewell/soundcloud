import { songsUrl } from './constants'

export const SONGS_RECEIVED_ACTION_TYPE = 'SONGS_RECEIVED_ACTION_TYPE';

const getSongs = () => {
    return function(dispatch) {
        console.log('about to fetch');
        fetch(songsUrl)
            .then(response => response.json())
            .then(sc_api_response => dispatch(songsReceived(sc_api_response)))
            .catch(error  => dispatch(songsFetchFailed(error)))
    };
};

const songsReceived = (sc_api_response) => {
    console.log('songs received! :', sc_api_response);
    return {
        type: SONGS_RECEIVED_ACTION_TYPE,
        payload: sc_api_response
    }
};

const songsFetchFailed = (error) => {
    return {
        type: 'SONGS_FETCH_FAILED',
        payload: error
    }
};

export default getSongs();