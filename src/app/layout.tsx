import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Ah Chye Pet Treats - Premium Pet Food & Treats',
  description: 'Discover premium quality pet treats, toys, and accessories for your beloved dogs and cats. Natural, healthy, and delicious treats your pets will love.',
  keywords: 'pet treats, dog treats, cat treats, pet toys, pet accessories, natural pet food, premium pet treats',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} antialiased min-h-screen bg-gray-50`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}