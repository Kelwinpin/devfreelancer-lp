import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseMe from '@/components/WhyChooseMe'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-background-light dark:bg-background-dark text-content-light dark:text-content-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
