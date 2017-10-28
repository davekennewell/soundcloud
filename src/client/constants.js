export const GENRES = [
    'chill',
    'deep',
    'dubstep',
    'house',
    'progressive',
    'tech',
    'trance',
    'tropical',
];

export const SONGS = [
  'Beds are burning',
  ''
];

export const mockSongs = [{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'How do you like meow? ',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'You\'re purrrfect for me',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'Despakitteo',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'How do you like meow? ',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'You\'re purrrfect for me',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'Despakitteo',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'How do you like meow? ',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'You\'re purrrfect for me',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'Despakitteo',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'How do you like meow? ',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'You\'re purrrfect for me',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
},{
    artwork_url: 'http://thecatapi.com/api/images/get?format=src&type=gif',
    title: 'Despakitteo',
    user: {
        avatar_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
    }
}];

// export const url='https://jsonplaceholder.typicode.com/posts/1';
const client_id ='cUa40O3Jg3Emvp6Tv4U6ymYYO50NUGpJ';
export const songsUrl = `https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=${client_id}&limit=20&offset=0&tags=trance`;