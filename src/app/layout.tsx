import { PropsWithChildren } from 'react';

import './globals.css';
import { IBM_Plex_Mono, Sue_Ellen_Francisco, ZCOOL_KuaiLe } from 'next/font/google';

const titleFont = Sue_Ellen_Francisco({ subsets: ['latin'], weight: '400', variable: '--font-title' });
const subTitleFont = ZCOOL_KuaiLe({ subsets: ['latin'], weight: '400', variable: '--font-subtitle' });
const emoticonFont = IBM_Plex_Mono({ subsets: ['latin'], weight: '400', variable: '--font-emoticon' });

export const metadata = {
  title: 'memoticon'
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${titleFont.variable} ${subTitleFont.variable} ${emoticonFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
