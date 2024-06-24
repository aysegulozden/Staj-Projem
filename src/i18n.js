import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector/cjs';

i18n
    .use(HttpBackend).use(LanguageDetector).use(initReactI18next)
    .init({
        fallbackLng: 'tr', // Dil tespit edilemezse kullanılacak dil
        debug: true, // Hata ayıklama için
        interpolation: {
            escapeValue: false, // React zaten XSS koruması yapıyor
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Dil dosyalarının yolu
        },

    })
export default i18n;
