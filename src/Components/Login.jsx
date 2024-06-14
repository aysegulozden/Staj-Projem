import React, { useState } from 'react'
import '../CSS/Login.css'
import { Avatar, Grid, Link, Paper, TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function Login() {
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


    return (
        <div className='container'>
            <Grid >
                <Paper className='paper' elevation={10} >
                    <Grid align='center'>
                        <Avatar className='avatar-login'><AccountCircleIcon /></Avatar>
                        <h2> Yönetici Giriş</h2>
                    </Grid>

                    <TextField
                        id="standard-basic1"
                        label="Kullanıcı Adı"
                        variant='standard'
                        placeholder='Kullanıcı Adı'
                        fullWidth
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} />


                    <TextField
                        id="outlined-password-input2"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant='standard'
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className='button-login' type='submit' onClick={handleLogin}>Giriş Yapınız</button>




                </Paper>

            </Grid>

            <Grid >
                <Paper className='paper' elevation={10} >
                    <Grid align='center'>
                        <Avatar className='avatar'><AccountCircleIcon /></Avatar>
                        <h2> Kullanıcı Girişi</h2>
                    </Grid>

                    <TextField
                        id="standard-basic"
                        label="Kullanıcı Adı"
                        variant='standard'
                        placeholder='Kullanıcı Adı'
                        fullWidth
                    />


                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant='standard'
                        fullWidth

                    />

                    <button className='button' type='submit' >Giriş Yapınız</button>

                    <Link className='link' href="/newUser" >
                        Yeni hesap oluştur
                    </Link>


                </Paper>

            </Grid>
        </div>
    )
}

export default Login