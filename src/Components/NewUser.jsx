import React, { useEffect } from 'react'
import styles from '../CSS/NewUser.module.css'
import { Avatar, Grid, Link, Paper, TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function newUser() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const navigate = useNavigate();
    const handleButtonClick = () => {

        navigate('/');


    }



    return (
        <div>
            <Grid >
                <Paper className={styles.paper} elevation={10} >
                    <Grid align='center'>
                        <Avatar className={styles.avatar}><AccountCircleIcon /></Avatar>
                        <h2>{t('register')}</h2>
                    </Grid>

                    <TextField
                        id="standard-basic-1"
                        label={t('user name')}
                        variant='standard'
                        placeholder={t('user name')}
                        fullWidth />

                    <TextField
                        id="standard-basic-2"
                        label={t('email')}
                        variant='standard'
                        placeholder={t('E-Mail')}
                        fullWidth />


                    <TextField
                        id="outlined-password-input"
                        label={t('password')}
                        placeholder={t('password')}
                        type="password"
                        autoComplete="current-password"
                        variant='standard'
                        fullWidth
                    />
                    <button className={styles.button} type='submit' onClick={handleButtonClick}>{t('register')}</button>
                </Paper>

            </Grid>
            <div className={styles['translate-buttons']}>
                <button onClick={() => changeLanguage('tr')}>Türkçe</button>
                <button onClick={() => changeLanguage('en')}>English</button>
            </div>
        </div>
    )
}

export default newUser