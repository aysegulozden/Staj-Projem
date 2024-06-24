import React from 'react'
import styles from '../CSS/Contact.module.css'
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';


function Contact() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <h2>
                    <EmailIcon className={styles.emailicon} />{t('contact us')}

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
                    <label>{t('your name')}</label>
                    <input type="text" name={t('your name')} placeholder={t('your name')} required />
                    <label>{t('your phone number ')}</label>
                    <input type="text" name={t('your phone number ')} placeholder={t('your phone number ')} required />
                    <label>{t('email')}</label>
                    <input type={t('email')} name={t('email')} placeholder={t('email')} required />
                    <label > {t('write your message')}</label>
                    <textarea name={t('write your message')} rows={20} placeholder={t('write your message')} required ></textarea>
                    <button type='submit' className={styles.btn} > {t('send')}</button>
                </form>

            </div>

        </div>
    )
}

export default Contact