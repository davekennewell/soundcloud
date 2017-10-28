import React from 'react';
import ReactDom from 'react-dom';
import SongsList from "./SongsList";
import Header from "./Header"
import Genres from "./Genres"
import styles from './app.css';
import SongsContainer from './SongsContainer'
import './reset.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/createStore';


const App = (props) => {
    const { dispatch, count, songs } = props;
    console.log('App props: ', props);
    console.log('dispatch:', dispatch);
    return (
    <div>
        <Header count={count} dispatch={dispatch}/>
        <Genres/>
        <SongsContainer songs={songs} dispatch={dispatch}/>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state });

const AppWithState = connect(mapStateToProps)(App);

ReactDom.render(
    <Provider store={store}>
        <AppWithState/>
    </Provider>,
  document.getElementById('root')
);
