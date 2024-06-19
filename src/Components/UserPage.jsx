import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../image/Logo.png'
import { Link } from 'react-router-dom';
import styles from '../CSS/UserPage.module.css'

function UserPage() {

    return (
        <div className={styles['User-container']}>
            <div className={styles.navbar}>
                <img src={Logo} className={styles.logo} />


                <ul className={styles.ul}>
                    <Link to='/HaritaUser'><li>Harita</li></Link>
                    <Link to='/aktivite'>
                        <li>Sosyal Aktiviteler</li></Link>
                    <Link to='/Iletisim'><li>İletişim</li></Link>



                </ul>
                <div className={styles['search-box']}>
                    <input type="text" placeholder='Arama' />
                    <SearchIcon className={styles.icon} />
                </div>


            </div>






        </div>
    )
}

export default UserPage