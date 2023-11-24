
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://kqqivmuvkyvgletojezk.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const metadata = {
  title: 'Carecam',
  description: 'Your Extra Set of Eyes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
