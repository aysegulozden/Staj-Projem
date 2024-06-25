import React, { useState } from 'react'
import styles from '../CSS/Admin.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../image/Logo.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




function AdminPage() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div className={styles['admin-container']}>
            <div className={styles.navbar}>
                <img src={Logo} className={styles.logo} />


                <ul className={styles.ul}>
                    <Link to='/Harita'>
                        <li>{t('map')}</li></Link>
                    <Link to='/about'> <li>{t('about')}</li></Link>
                </ul>
                <div className={styles['search-box']}>
                    <input type="text" placeholder={t('search')} />
                    <SearchIcon className={styles.icon} />
                </div>
                <div className={styles['translate-buttons']}>

                    <button onClick={() => changeLanguage('tr')}>Türkçe</button>
                    <button onClick={() => changeLanguage('en')}>English</button>
                </div>

            </div>

        </div>
    )
}

export default AdminPage