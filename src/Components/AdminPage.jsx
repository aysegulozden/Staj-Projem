import React, { useState } from 'react'
import styles from '../CSS/Admin.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../image/Logo.png'
import { Link } from 'react-router-dom';




function AdminPage() {

    return (
        <div className={styles['admin-container']}>
            <div className={styles.navbar}>
                <img src={Logo} className={styles.logo} />


                <ul className={styles.ul}>
                    <Link to='/Harita'>
                        <li>Harita</li></Link>
                    <li>Hava Durumu</li>
                    <li>Hakkımızda</li>
                </ul>
                <div className={styles['search-box']}>
                    <input type="text" placeholder='Arama' />
                    <SearchIcon className={styles.icon} />
                </div>
            </div>
        </div>
    )
}

export default AdminPage