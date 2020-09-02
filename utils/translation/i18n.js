import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    //facilities
                    'Great value': 'Great value',
                    'We offer competitive prices for products': 'We offer competitive prices for products',
                    '24/7 support center': '24/7 support center',
                    'Day and night support for a comfortable shopping experience.':
                        'Day and night support for a comfortable shopping experience.',
                    'Safe shopping': 'Safe shopping',
                    'Protecting our users includes your purchases from clicks to delivery.':
                        'Protecting our users includes your purchases from clicks to delivery.',
                    'Secure Payment': 'Secure Payment',
                    'Pay with the most popular and reliable payment methods in the world.':
                        'Pay with the most popular and reliable payment methods in the world.',
                    'Worldwide delivery': 'Worldwide delivery',
                    'With sites in 5 languages, we send to more than 200 countries and regions.':
                        'With sites in 5 languages, we send to more than 200 countries and regions.',
                },
            },
            aze: {
                translations: {
                    //facilities
                    'Great value': 'Böyük dəyər',
                    'We offer competitive prices for products': 'Məhsullara rəqabətli qiymətlər təklif edirik',
                    '24/7 support center': '24/7 dəstək mərkəzi',
                    'Day and night support for a comfortable shopping experience.':
                        'Rahat bir alış-veriş təcrübəsi üçün gecə-gündüz dəstək.',
                    'Safe shopping': 'Safe shopping',
                    'Protecting our users includes your purchases from clicks to delivery.':
                        'İstifadəçilərimizi qorumaq klikdən təslimə qədər alışınızı əhatə edir.',
                    'Secure Payment': 'Təhlükəsiz Ödəniş',
                    'Pay with the most popular and reliable payment methods in the world..':
                        'Dünyanın ən populyar və etibarlı ödəniş üsulları ilə ödəyin.',
                    'Worldwide delivery': 'Ümumdünya çatdırılma',
                    'With sites in 5 languages, we send to more than 200 countries and regions.':
                        '5 dildə saytlarla, 200-dən çox ölkəyə və bölgəyə göndəririk.',
                },
            },
        },
        fallbackLng: 'eng',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
