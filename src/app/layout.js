import './globals.css'
import Header from '../components/FHeader';
import localfont from 'next/font/local'
import Head from 'next/head';

const ablition = localfont({
  src: "../../public/Fonts/Ablation.otf",
  weight: "400",
  variable: "--font-ablition"
}
)
const giorgia = localfont({
  src: "../../public/Fonts/Giorgia.otf",
  weight: "400",
  variable: "--font-giorgia"
}
)

export const metadata = {
  title: 'Jalal Girma',
  description: 'Full Stack Web Developer specializing in the MERN stack, Next.js, and creating high-performance, interactive web applications. Passionate about delivering clean, user-friendly, and scalable solutions.',
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='/src/app/favicon.ico'/>
        <meta name="theme-color" content="#111" />
      </head>
      <body className={`${giorgia.variable}
           ${ablition.variable}
           overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
