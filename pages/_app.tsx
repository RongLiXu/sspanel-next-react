import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

// import '@/styles/globals.css'
import '@/assets/css/globals.css'

export default function App({ Component, pageProps}: AppProps) {{
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}}