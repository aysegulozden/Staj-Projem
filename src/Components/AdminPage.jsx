import React, { useState } from 'react'
import styles from '../CSS/Admin.module.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny'; import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { light } from '@mui/material/styles/createPalette';
import Logo from '../image/Logo.png'



function AdminPage({ theme, setTheme }) {

    // const toggleTheme = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // };

    return (
        <div className={`${styles['admin-container']} ${styles[theme]}`}>
            <div className={styles.navbar}>
                <img src={Logo} className={styles.logo} />


                <ul className={styles.ul}>
                    <li>Harita</li>
                    <li>Sosyal Aktiviteler</li>
                    <li>Hakkımızda</li>
                    <li>Yeni Üye</li>

                </ul>
                <div className={styles['search-box']}>
                    <input type="text" placeholder='Arama' />
                    <SearchIcon className={styles.icon} />
                </div>
                {/* <NightlightIcon className={styles.icon} onClick={() => { toggleTheme() }} /> */}





            </div>




        </div>
    )
}

export default AdminPage