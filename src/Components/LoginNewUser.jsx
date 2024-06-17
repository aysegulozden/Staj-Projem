import React from 'react';
import AdminPage from './AdminPage';
import styles from '../CSS/LoginNewUser.module.css';
import SignIn from './SignIn';

function LoginNewUser() {
    return (
        <div className={styles.kayit}>
            <AdminPage />
            <SignIn />
        </div>
    );
}

export default LoginNewUser;
