import React, { useEffect } from 'react'
import styles from '../CSS/NewUser.module.css'
import { Avatar, Grid, Link, Paper, TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'

function newUser() {
    const navigate = useNavigate();
    const handleButtonClick = () => {

        navigate('/');


    }



    return (
        <div>
            <Grid >
                <Paper className='paper' elevation={10} >
                    <Grid align='center'>
                        <Avatar className='avatar'><AccountCircleIcon /></Avatar>
                        <h2>Kayıt Olunuz</h2>
                    </Grid>
                    <TextField id="standard-basic-1" label="Kullanıcı Adı" variant='standard' placeholder='Kullanıcı Adı' fullWidth />

                    <TextField id="standard-basic-2" label="E-posta" variant='standard' placeholder='E-posta' fullWidth />


                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant='standard'
                        fullWidth
                    />
                    <button className='button' type='submit' onClick={handleButtonClick}>Kaydolunuz</button>
                </Paper>

            </Grid>
        </div>
    )
}

export default newUser