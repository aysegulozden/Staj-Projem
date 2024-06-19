import React from 'react'
import styles from '../CSS/Contact.module.css'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.dsc}>
                <h2>Bizimle İletişime Geçin
                    <EmailIcon className={styles.emailicon} />
                </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quae esse facere accusantium accusamus distinctio odit, ratione vero, dolores atque mollitia? Reprehenderit corrupti corporis placeat! Labore nam obcaecati quia assumenda praesentium quaerat, repellat aspernatur ab ex saepe nisi temporibus rerum consequuntur porro! Hic repellat saepe exercitationem possimus quibusdam eos laudantium?</p>
                <ul>
                    <li>0222 111 33 44 </li>
                    <li>iletisim@gmail.com</li>
                    <li>@socail_people</li>
                </ul>

            </div>
            <div className={styles.from}>
                <h2>Bilgileriniz</h2>
            </div>
        </div>
    )
}

export default Contact