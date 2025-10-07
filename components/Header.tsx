'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background-light/80 dark:bg-background-dark/80 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h2 className="text-xl font-bold">DevFreelancer</h2>
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Serviços</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#portfolio">Portfólio</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">Depoimentos</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contato</a>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </nav>
        )}
      </div>
    </header>
  )
}
