import React from 'react';
import { connect } from 'react-redux';
import styles from './header.css'

const Header = () => {
    return (
        <div className={styles.header}>
            Astrolabs SoundCloud Workshop
        </div>
    );
};



export default Header;