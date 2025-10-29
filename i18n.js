import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      'app_name': 'Blinkr',
      'login': 'تسجيل دخول',
      'signup': 'إنشاء حساب',
      'posts': 'المنشورات',
      'create_post': 'انشر منشورًا',
      'chat': 'الدردشة',
      'stories': 'القصص'
    }
  },
  en: {
    translation: {
      'app_name': 'Blinkr',
      'login': 'Login',
      'signup': 'Sign up',
      'posts': 'Posts',
      'create_post': 'Create Post',
      'chat': 'Chat',
      'stories': 'Stories'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar',
  fallbackLng: 'ar',
  interpolation: { escapeValue: false }
});

export default i18n;
