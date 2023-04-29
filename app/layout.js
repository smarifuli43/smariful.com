import Navbar from './components/navbar/Navbar';
import './globals.css';

import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'Ariful - Portfolio Home',
  description: 'Generated by create next app',
};

const font = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin-ext'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={` selection:bg-[#5c2ede] selection:text-white ${font.className}`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
