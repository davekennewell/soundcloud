import React from 'react';
import ReactDom from 'react-dom';
import SongsList from "./SongsList";
import Header from "./Header"
import Genres from "./Genres"
import styles from './app.css';
import SongsContainer from './SongsContainer'
import './reset.css';
import { Provider } from 'react-redux';
import store from './redux/createStore';



const songs = [
    {name: 'Beds are burning'},
    {name: 'US forces'}
];

const App = (props) => {
  return (
    <div>
        <Header/>
        <Genres/>
            <div className={styles.app}>
                <SongsList songs={songs}/>
            </div>
        <SongsContainer/>
    </div>
  );
};

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);
