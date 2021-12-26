import {AppProps} from "next/app";
import {ReactNode} from "react";
import {NextPage} from "next";

interface CustomAppProps extends Omit<AppProps, "Component"> {
    Component: AppProps["Component"] & {
        auth: boolean,
        skeletonLoader?: ReactNode;
        getLayout?: (component: JSX.Element) => JSX.Element;
    };
}

export type CustomNextPage = NextPage & {
    auth: boolean,
    skeletonLoader?: ReactNode;
    getLayout?: (component: JSX.Element) => JSX.Element;
};
