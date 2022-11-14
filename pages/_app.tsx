import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect } from 'react';
import { Roboto } from '@next/font/google';

// config.autoAddCss = false;

const bodyText = Roboto({ 
  weight: '400', 
  subsets: ['latin'],
  style: 'normal',
  display: 'swap', 
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {document.body.className = `bg-white ${bodyText.className}`});
  return <Component {...pageProps} />
};

export default MyApp;
