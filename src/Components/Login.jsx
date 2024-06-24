import React, { useState } from 'react'
import styles from '../CSS/Login.module.css'
import { Avatar, Grid, Link, Paper, TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Login() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (userName === 'aysegul' && password === '123456') {
            navigate('/admin');
        }

        else {


            alert('Kullanıcı adı veya şifre hatalı');
            setUserName('');
            setPassword('');
        }
    };
    const girisUser = () => {
        navigate('/HaritaUser')
    }


    return (
        <div className={styles.container}>
            <Grid >
                <Paper className={styles.paper} elevation={10} >
                    <Grid align='center'>
                        <Avatar className={styles['avatar-login']}><AccountCircleIcon /></Avatar>
                        <h2>{t('admin login')}</h2>
                    </Grid>

                    <TextField
                        id="standard-basic1"
                        label={t('user name')}
                        variant='standard'
                        placeholder={t('user name')}
                        fullWidth
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} />


                    <TextField
                        id="outlined-password-input2"
                        label={t('password')}
                        type="password"
                        autoComplete="current-password"
                        placeholder={t('password')}
                        variant='standard'
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className={styles['button-login']} type='submit' onClick={handleLogin}>{t('login')}</button>




                </Paper>

            </Grid>

            <Grid >
                <Paper className={styles.paper} elevation={10} >
                    <Grid align='center'>
                        <Avatar className={styles.avatar}><AccountCircleIcon /></Avatar>
                        <h2> {t('user login')}</h2>
                    </Grid>

                    <TextField
                        id="standard-basic"
                        label="Kullanıcı Adı"
                        variant='standard'
                        placeholder={t('user name')}
                        fullWidth
                    />


                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        placeholder={t('password')}
                        type="password"
                        autoComplete="current-password"
                        variant='standard'
                        fullWidth

                    />

                    <button className={styles.button} type='submit' onClick={girisUser} >{t('login')}</button>

                    <Link className={styles.link} href="/newUser" >
                        {t('register')}
                    </Link>


                </Paper>

            </Grid>
            <div className={styles['translate-buttons']}>
                <button onClick={() => changeLanguage('tr')}>Türkçe</button>
                <button onClick={() => changeLanguage('en')}>English</button>
            </div>
        </div>
    )
}

export default Login