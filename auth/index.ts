/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-10-29 16:59:41
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-10-31 14:40:37
 * @FilePath: /lulab_website_next_js/auth/index.ts
 * @Description: 
 * https://www.youtube.com/watch?v=z2A9P1Zg1WM
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import NextAuth, { User, NextAuthConfig } from "next-auth";
import type { Provider } from "next-auth/providers"
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github"

export const BASE_PATH = "/api/auth";


const providers: Provider[] = [
    Credentials({
        name: "Credentials",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials): Promise<User | null> {
            const users = [
                {
                    id: "test-user-1",
                    userName: "test1",
                    name: "Test 1",
                    password: "pass",
                    email: "test1@donotreply.com",
                },
                {
                    id: "test-user-2",
                    userName: "test2",
                    name: "Test 2",
                    password: "pass",
                    email: "test2@donotreply.com",
                },
            ];
            const user = users.find(
                (user) =>
                    user.userName === credentials.username &&
                    user.password === credentials.password
            );
            return user
                ? { id: user.id, name: user.name, email: user.email }
                : null;
        },
    }),
    GitHub,
]


export const providerMap = providers
    .map((provider) => {
        if (typeof provider === "function") {
            const providerData = provider()
            return { id: providerData.id, name: providerData.name }
        } else {
            return { id: provider.id, name: provider.name }
        }
    })
    .filter((provider) => provider.id !== "credentials")



export const { handlers, auth, signIn, signOut } = NextAuth({
    providers,
    pages: {
        signIn: "/signin",
        error: "/error",
    },
    session: { strategy: "jwt" },
    callbacks: {
        // async jwt({ token, user }) {
        //     console.log("432")
        // },
        async signIn({ user, account, profile, email, credentials }) {
            console.log("signIn", user, account, profile, email, credentials)
            return true
        },
        async redirect({ url, baseUrl }) {
            // 如果 URL 是基于你的 baseUrl，则重定向到它，否则重定向到主页
            console.log("321431431242")
            return url.startsWith(baseUrl) ? url : baseUrl;
        },

    },
    // basePath: BASE_PATH,
    secret: process.env.AUTH_SECRET,
})
