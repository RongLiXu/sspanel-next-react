import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { useRouter } from 'next/router';

import enUS from '@/public/locales/en-US'; // 英文语言包
import zhCN from '@/public/locales/zh-CN'; // 中文语言包
import zhTW from '@/public/locales/zh-TW'; // 中文(繁体)语言包
import jaJP from '@/public/locales/ja-JP'; // 日语语言包


const LanguageMap = {
    'en': enUS,
    'en-US': enUS,
    'zh': zhCN,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'ja-JP': jaJP,
};

const getLanguage = () => {
    let language = 'zh-CN'
    try{
        if(navigator.systemLanguage){
        language = navigator.systemLanguage
        } else if(navigator.language){
        language = navigator.language
        } else if(useRouter().locale){
        language = useRouter().locale
        }
    }catch(e){}
}

i18n.use(LanguageDetector) // 声明检测器
    .use(initReactI18next) // 声明react插件
    .init({
        resources: {
            'en': {
                translation: LanguageMap['en-US'],
            },
            'en-US': {
                translation: LanguageMap['en-US'],
            },
            'zh': {
                translation: LanguageMap['zh-CN'],
            },
            'zh-CN': {
                translation: LanguageMap['zh-CN'],
            },
            'zh-TW': {
                translation: LanguageMap['zh-TW'],
            },
            'ja-JP': {
                translation: LanguageMap['ja-JP'],
            },
        },
        fallbackLng: getLanguage(), // 默认语言
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    })

export default i18n;


