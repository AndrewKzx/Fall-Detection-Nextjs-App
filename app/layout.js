// app/layout.js
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Carecam',
  description: 'Your Extra Set of Eyes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Here you can include global meta tags, scripts, and styles */}
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
