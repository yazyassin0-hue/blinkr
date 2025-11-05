import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to Blinkr',
        login: 'Login',
        signup: 'Sign Up',
      logout: 'Logout',
      },
    },
    ar: {
      translation: {
        welcome: 'مرحبًا بك في بلينكر',
        login: 'تسجيل الدخول',
        signup: 'إنشاء حساب',
        logout: 'تسجيل الخروج',
      },
    },
  },
});

export default i18next;
