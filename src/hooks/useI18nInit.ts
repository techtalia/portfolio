"use client";

import { useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '../locales/en.json';
import ptTranslations from '../locales/pt.json';

export const useI18nInit = () => {
  useEffect(() => {
    const initI18n = async () => {
      if (!i18n.isInitialized) {
        await i18n
          .use(LanguageDetector)
          .use(initReactI18next)
          .init({
            fallbackLng: 'en',
            interpolation: {
              escapeValue: false,
            },
            detection: {
              order: ['localStorage', 'navigator'],
              caches: ['localStorage'],
            },
            supportedLngs: ['en', 'pt'],
            resources: {
              en: {
                translation: enTranslations
              },
              pt: {
                translation: ptTranslations
              }
            }
          });
      }
    };

    initI18n();
  }, []);
};
