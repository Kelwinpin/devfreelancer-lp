'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background-light/80 dark:bg-background-dark/80 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-kr-transparent.png"
              alt="DevFreelancer Logo"
              width={120}
              height={60}
              className="object-fill"
            />
          </div>
          <button
            className="p-2 md:hidden relative w-10 h-10 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute w-6 h-5 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute h-0.5 w-full bg-current top-2 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Serviços</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#portfolio">Portfólio</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">Depoimentos</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contato</a>
          </nav>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="pb-4 flex flex-col gap-4">
            <a className="text-sm font-medium hover:text-primary transition-all duration-200 hover:translate-x-2" href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a className="text-sm font-medium hover:text-primary transition-all duration-200 hover:translate-x-2" href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</a>
            <a className="text-sm font-medium hover:text-primary transition-all duration-200 hover:translate-x-2" href="#testimonials" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a className="text-sm font-medium hover:text-primary transition-all duration-200 hover:translate-x-2" href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
