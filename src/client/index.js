import React from 'react';
import ReactDom from 'react-dom';
import SongsList from "./SongsList";
import Header from "./Header"
import styles from './app.css';
import './reset.css'

const songs = [
    {name: 'Beds are burning'},
    {name: 'US forces'}
];

const App = (props) => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className={styles.app}>
            <SongsList songs={songs}/>
        </div>
    </div>
  );
};

ReactDom.render(
  <App/>,
  document.getElementById('root')
);
