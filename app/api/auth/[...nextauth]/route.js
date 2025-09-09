// All the API endpoints related to NextAuth.js authentication

import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import EmailProvider from "next-auth/providers/email";


import mongoose from 'mongoose';
import User from '../../../models/User';
import Payment from '../../../models/Payment';
import connectDB from "@/db/connectDb";

connectDB(); 

export const authoptions = NextAuth({
    providers: [
        // OAuth authentication providers...
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET,
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET,
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET,
        // }),
        // EmailProvider({
        //     clientId: process.env.EMAIL_ID,
        //     clientSecret: process.env.EMAIL_SECRET,
        // }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === "github") {
                //Connect to the database
                // const client = await mongoose.connect(process.env.MONGO_URI);
                //Check if user already exists in the database
                const currentUser = await User.findOne({ email: user.email });
                if (!currentUser) {
                    //Create a new User
                    const newUser = await User({
                        email: user.email,
                        username: user.email.split("@")[0],
                    })
                    // await newUser.save();
                    // user.name = newUser.username;
                }
                return true;
            }
        },
        async session({ session, user, token }){
            const dbUser = await User.findOne({ email: session.user.email });
            console.log(dbUser)
            session.user.name = dbUser.username
            return session;
        },
    }
})

export { authoptions as GET, authoptions as POST };