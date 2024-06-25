import React from 'react'
import AdminPage from './AdminPage'
import Logo from '../image/Logo.png'
import styles from '../CSS/AboutAdmin.module.css'
import { Container, Box, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TagIcon from '@mui/icons-material/Tag';

function About() {
    return (
        <div>
            <div>
                <AdminPage />
            </div>
            <div className={styles.container}>
                <Box className={styles.box}>
                    <Typography variant="h4" component="h1" gutterBottom className={styles.about}>
                        HAKKIMIZDA
                    </Typography>
                    <Typography className={styles.dsc} variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam voluptates optio laborum similique voluptatum quisquam autem illo tempore eius? Molestias cumque nobis reprehenderit beatae laborum error cupiditate minus. Nesciunt tempore quaerat, excepturi nam libero molestias harum nulla, laborum aperiam maxime dolorum explicabo id fugit iure. Pariatur fuga impedit incidunt?
                    </Typography>
                    <Typography className={styles.cnt}>
                        <LocalPhoneIcon className={styles.icon} />
                        +0212 562 78 98
                    </Typography>
                    <Typography className={styles.cnt}>
                        <EmailIcon className={styles.icon} />
                        socaililetisi@gmail.com
                    </Typography>
                    <Typography className={styles.cnt}>
                        <TagIcon className={styles.icon} /> socail_people
                    </Typography>
                </Box>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" className={styles.logo} />
                </div>
            </div>
        </div>
    )
}

export default About
