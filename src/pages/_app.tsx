import '../../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { CustomAppProps } from "../../types/auth.types";
import Auth from "../core/components/Auth";
import { Component } from 'react';

export default function MyApp({ Component, pageProps: { session, ...pageProps }, } : CustomAppProps) {
    const getLayout = Component.getLayout || ((page) => page);
    const skeletonLoader = Component.skeletonLoader;

    return (
        <SessionProvider session={session}>
            { Component.auth ? (
                <Auth skeletonLoader={skeletonLoader}>
                    {getLayout(<Component {...pageProps} />)}
                </Auth>
                ) :  getLayout(<Component {...pageProps} />)
            }
        </SessionProvider>
    )
}
