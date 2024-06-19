import React from 'react'
import styles from '../CSS/Contact.module.css'
import EmailIcon from '@mui/icons-material/Email';


function Contact() {


    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <h2>
                    <EmailIcon className={styles.emailicon} />Bizimle İletişime Geçin

                </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quae esse facere accusantium accusamus distinctio odit, ratione vero, dolores atque mollitia? Reprehenderit corrupti corporis placeat! Labore nam obcaecati quia assumenda praesentium quaerat, repellat aspernatur ab ex saepe nisi temporibus rerum consequuntur porro! Hic repellat saepe exercitationem possimus quibusdam eos laudantium?</p>
                <ul className={styles.list}>
                    <li>0222 111 33 44 </li>
                    <li>iletisim@gmail.com</li>
                    <li>@socail_people</li>
                </ul>

            </div>
            <div className={styles.contact}>
                <form >
                    <label>Adınız</label>
                    <input type="text" name='adını' placeholder='Adınız' required />
                    <label>Telefon Numaranız</label>
                    <input type="text" name="telefon" placeholder='Telefon Numaranız' required />
                    <label>E-Mail</label>
                    <input type="email" name="email" placeholder='E-Mail' required />
                    <label > Mesajınızı Yazınız</label>
                    <textarea name="mesaj" rows={10} placeholder='Mesajınız' required ></textarea>
                    <button type='submit' className={styles.btn} >Gönder</button>
                </form>

            </div>
        </div>
    )
}

export default Contact