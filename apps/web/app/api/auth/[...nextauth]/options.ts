import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import type { AuthOptions } from "next-auth"

export const authOptions : AuthOptions = {
    providers : [
      GoogleProvider({
        clientId : process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
        clientSecret:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? ''
      }),
      GithubProvider({
        clientId : process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
        clientSecret:process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string
      })
    ]
}