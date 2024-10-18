import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-blue-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Company Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="flex items-baseline space-x-4">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/services">Services</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </div>
          </div>
          <div className="md:hidden">
            <button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-56' : 'max-h-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-50">
          <NavItem href="/" onClick={toggleMenu}>Home</NavItem>
          <NavItem href="/services" onClick={toggleMenu}>Services</NavItem>
          <NavItem href="/about" onClick={toggleMenu}>About</NavItem>
          <NavItem href="/contact" onClick={toggleMenu}>Contact</NavItem>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ href, children, onClick }) {
  return (
    <Link
      href={href}
      className="text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}