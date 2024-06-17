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
                    <li>Harita</li>
                    <li>Hava Durumu</li>
                    <li>Sosyal Aktiviteler</li>
                    <li>Hakkımızda</li>
                    <Link to='/LoginNewUser' className={styles['nav-link']}>  <li >Yeni Üye</li></Link>

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