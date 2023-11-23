// app/lib/auth.js
import GoogleProvider from "next-auth/providers/google";
const CredentialsProvider = require("next-auth/providers/credentials");

const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),  
  ],
};

module.exports = { authOptions };

