import React from 'react';
import styles from './app.css'

const Header = (props) => {
    console.log(props);

    return (
        <div className={styles.header} onClick={() => props.dispatch({type:'INCREMENT_COUNTER'})}>
            Astrolabs SoundCloud Workshop {props.count}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (state) => {
    return {
    };
};



export default Header;