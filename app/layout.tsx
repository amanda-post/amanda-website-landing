import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "~/components/ui/toaster"

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
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <Toaster />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
