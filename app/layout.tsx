import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amanda Slocum",
  description: "Amanda Slocum's dev website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} m-0 h-full bg-gradient-to-r from-indigo-700 to-fuchsia-800 bg-fixed bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  )
}
