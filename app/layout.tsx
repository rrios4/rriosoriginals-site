import Navbar from "components/layout/navbar"
import "../styles/tailwind.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js Enterprise read app",
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container my-8">{children}</div>
      </body>
    </html>
  )
}
