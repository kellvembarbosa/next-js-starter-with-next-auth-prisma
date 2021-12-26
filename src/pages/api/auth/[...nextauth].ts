import NextAuth from "next-auth"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
    callbacks: {
        async jwt({ token,user, account }) {
            if (account ) {
                token.accessToken = account.access_token
            }
            if(user){
                token.address = user.address
            }
            return token
        },
        async session({ session, token }) {
            console.log(token)
            if(session){
                session.user.name = token.name
                session.user.email = token.email
                session.user.address = token.address
            }
            return session
        },
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const user = {id: 1, name: "J Smith", email: "jsmith@example.com", address: "0x000000000000" }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
})