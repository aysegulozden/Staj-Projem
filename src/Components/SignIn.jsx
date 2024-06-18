import React from 'react'
import { Avatar, Grid, Link, Paper, TextField, } from '@mui/material'
import styles from '../CSS/SignIn.module.css'
import Logo from '../image/Logo.png'

function SignIn() {
    const handleButtonClick = () => {
        alert("Kullanıcı Kaydı Başarıyla Gerçekleştirilmiştir")
    }
    return (
        <div className={styles.container}>
            <Grid>


                <Paper className={styles.paper}>
                    <h1>Yeni Kayıt</h1>
                    <TextField
                        id="standard-basic1"
                        label="Adı"
                        variant='standard'
                        placeholder='Kullanıcı Adı'
                        fullWidth
                    />

                    <TextField
                        id="standard-basic1"
                        label="Soyadı"
                        variant='standard'
                        placeholder='Kullanıcı Adı'
                        fullWidth
                    />
                    <TextField
                        id="standard-basic1"
                        label="Yaşı"
                        variant='standard'
                        placeholder='Kullanıcı Adı'
                        fullWidth
                    />
                    <TextField
                        id="standard-basic1"
                        label="Doğum Tarihi"
                        variant='standard'
                        placeholder='Kullanıcı Adı'
                        fullWidth
                    />



                    <TextField id="standard-basic-2" label="E-posta" variant='standard' placeholder='E-posta' fullWidth />

                    <button className={styles.button} type='submit' onClick={handleButtonClick} >Kaydet</button>
                </Paper>
            </Grid>



            <Grid>

                <img src={Logo} className={styles.logo} />
            </Grid>


        </div>
    )
}

export default SignIn