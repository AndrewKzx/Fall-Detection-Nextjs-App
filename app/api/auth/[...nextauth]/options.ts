//app/api/auth/[...nextauth]/options.ts
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://kqqivmuvkyvgletojezk.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async signIn({ user }) {
            const { data, error } = await supabase
                .from('Users')
                .upsert({
                    userid: user.id,
                    email: user.email,
                    name: user.name
                }, {
                    onConflict: 'email'
                });

            if (error) {
                console.error('Error inserting user into Supabase:', error);
                return false;
            }

            return true; // Return true to indicate successful sign in
        },
    },
}
