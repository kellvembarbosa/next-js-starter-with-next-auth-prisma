import NextAuth from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            name: string,
            email: string,
            address: string;
        }
    }

    interface User {
        name: string,
        email: string,
        address: string;
    }
}


declare module "next-auth/jwt" {
    interface JWT {
        name: string,
        email: string,
        address: string;
    }
}
