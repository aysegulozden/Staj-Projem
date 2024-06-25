import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../image/Logo.png'
import { Link } from 'react-router-dom';
import styles from '../CSS/UserPage.module.css';
import { useTranslation } from 'react-i18next';

function UserPage() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div className={styles['User-container']}>
            <div className={styles.navbar}>
                <img src={Logo} className={styles.logo} />


                <ul className={styles.ul}>
                    <Link to='/HaritaUser'><li>{t('map')}</li></Link>
                    <Link to='/Iletisim'><li>{t('contact')}</li></Link>
                    <Link to='/AboutUser'> <li>{t('about')}</li></Link>
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

export default UserPage