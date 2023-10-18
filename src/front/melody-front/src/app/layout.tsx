import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Footer from '../components/global/Footer';
import { UserContextProvider } from "../contexts/UserContext";
// import Header from "../components/global/header/Header";
import dynamic from "next/dynamic";


const inter = Inter({ subsets: ['latin'] });


const Header = dynamic(() => import('../components/global/header/Header'));




export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type LinkItem = {
  href: string;
  key: string;
};

const links: LinkItem[] = [
  {
    href: '/',
    key: 'home',
  },
  {
    href: '/signUp',
    key: 'signUp',
  },
  {
    href: '/login',
    key: 'login',
  },
];

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
    <UserContextProvider>
      <body className={inter.className}>
          {/*<Header  />*/}
           {children}
          <Footer />
      </body>
    </UserContextProvider>
    </html>
  );
}
