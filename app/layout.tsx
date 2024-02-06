import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local';
import Footer from "@/components/Footer";

const myFont = localFont({
  src: [
    {
      path: '../public/assets/fonts/GoogleSansTTF/GoogleSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/GoogleSansTTF/GoogleSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/assets/fonts/GoogleSansTTF/GoogleSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/GoogleSansTTF/GoogleSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/assets/fonts/GoogleSansTTF/GoogleSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/GoogleSansTTF/GoogleSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const metadata: Metadata = {
  title: 'ISGroup',
  description: 'ISGroup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
       
        <Footer />
        </body>
    </html>
  )
}
