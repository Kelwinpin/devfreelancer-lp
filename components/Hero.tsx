import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                Transforme sua ideia em realidade
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-subtle-light dark:text-subtle-dark">
                Desenvolvedor freelancer especializado em criar soluções web e mobile inovadoras e de alta qualidade.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105"
                href="#contact"
              >
                Entre em contato
              </a>
            </div>
          </div>
          <div className="w-full aspect-square lg:aspect-[4/3] rounded-xl bg-cover bg-center relative overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP-KYulLm8ZU0XR7q_9xeQlnqwvKCBaDSTU0u9a9j8HDlrlSvYiWjJQwNtRAH4OY6m-KbzHep40NoMUaK2ZRxJEBdHk4dxM1ljtDBvD2ft2xQzr0YcVUNaxXaSGiSgyHs-ESKo7vZdoOx030DwkgmnelndDPGHfnhMYXYjE2b6lfYz5fjMlnQFWOvV-Y18N5LCbVhZSy0vhYK8g5H7Y583i2y69wvF-f-uDv7P0f71D43jBDZtnXzjiMS62r8hyR1FtdvqBpBUFZQ"
              alt="Developer workspace"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
