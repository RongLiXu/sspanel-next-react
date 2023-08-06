import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

// import '@/styles/globals.css'
import '@/assets/css/globals.css'
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import i18n from '@/pages/i18n'
import { useRouter } from "next/router";

 const App = ({ Component, pageProps}: AppProps) => {{
    const router  = useRouter()
    useEffect(() => {
        i18n?.init({
            lng: router.locale,
        })
    },[])

    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}}

 
export default appWithTranslation(App);