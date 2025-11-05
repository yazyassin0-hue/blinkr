import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Blinkr",
      login: "Login",
      signup: "Sign Up",
      home: "Home",
      chat: "Chat",
      logout: "Logout"
    }
  },
  ar: {
    translation: {
      welcome: "مرحبًا بك في Blinkr",
      login: "تسجيل الدخول",
      signup: "إنشاء حساب",
      home: "الرئيسية",
      chat: "الدردشة",
      logout: "تسجيل الخروج"
    }
  }
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
