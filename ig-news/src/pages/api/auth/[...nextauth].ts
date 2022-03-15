import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { query as q } from "faunadb";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "read:user",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }): Promise<boolean> {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index("users_by_email"), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection("users"), { dat: { email } }),
            q.Get(q.Match(q.Index("users_by_email"), q.Casefold(user.email)))
          )
        );
      } catch (e) {
        console.log(e);
      }

      return true;
    },
  },
});
