/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-10-30 12:03:30
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-10-31 15:13:56
 * @FilePath: /lulab_website_next_js/app/[locale]/signin/page.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */


import { redirect } from "next/navigation"
import { signIn, auth, providerMap } from "../../../../auth/index"
import { AuthError } from "next-auth"

const SIGNIN_ERROR_URL = "/error" // 假设这是错误页面的 URL

export default async function SignInPage(props: {
    searchParams: { callbackUrl: string | undefined }
}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
                <h1 className="text-2xl font-semibold text-center">Sign In</h1>
                <form
                    action={async (formData) => {
                        "use server"
                        try {
                            await signIn("credentials", formData, { callbackUrl: '/home' })
                        } catch (error) {
                            if (error instanceof AuthError) {
                                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                            }
                            throw error
                        }
                    }}
                    className="space-y-4"
                >
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            用户名
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign In
                    </button>
                </form>
                <div className="flex items-center justify-center space-x-2 mt-6">
                    <span className="text-gray-500 text-sm">or sign in with</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {Object.values(providerMap).map((provider) => (
                        <form
                            key={provider.id}
                            action={async () => {
                                "use server"
                                try {
                                    await signIn(provider.id, {
                                        redirectTo: props.searchParams?.callbackUrl ?? "",
                                    })
                                } catch (error) {
                                    if (error instanceof AuthError) {
                                        return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                                    }
                                    throw error
                                }
                            }}
                        >
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in with {provider.name}
                            </button>
                        </form>
                    ))}
                </div>
            </div>
        </div>
    )
}
