/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n:{
        locales: ['en-US', 'zh-CN', 'zh-TW', 'ja-JP'],
        defaultLocale: 'zh-CN',
        // localeDetection: false,
        // serializeConfig: false,
        // fallbackLng: 'zh-CN',
        // defaultNS: 'index',
        // fallbackNS: 'index',
        // debug: false,
        // preload: ['en-US', 'zh-CN', 'zh-TW', 'ja-JP'],
        // interpolation: {
        //     escapeValue: false,
        //     formatSeparator: '.',
        //     format: (value, format, lng) => {
        //         if (format === 'uppercase') return value.toUpperCase()
        //         return value
        //     }
        // },
        // react: {
        //     useSuspense: false,
        //     wait: false,
        // },
    }
}

module.exports = nextConfig
