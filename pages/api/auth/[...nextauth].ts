import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        npsso: { label: 'NPSSO', type: 'text' },
      },
      async authorize(credentials, req) {
        if (!credentials?.npsso) {
          return null;
        }

        return { id: 1 };
      },
    }),
  ],
};

export default NextAuth(authOptions);
