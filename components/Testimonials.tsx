import Image from 'next/image'

const testimonials = [
  {
    name: 'Sophia Carter',
    role: 'CEO, Tech Solutions',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUJRcyNHx8oxKY6nZXhZdnalBwPx5ADmeJE4ewETObMEOsUUwYbOPeoHntM_q9qjm5rreAye1-ST25tVbNha618I_atpsZshm3reWInH_X2ACkJ8HVRBLFF9dwfu8z5ZAz7M6lSo1Ee-CW72YEoa_s2QYs2d9uQYGOqFU7sqfkpwsX3CY5Kxu9v32TLZNLdqaRxHmr1r6mFzCaLUK7yRJ5H5a3n5cy69ESpsbDq8F9mc4PxgL7P9A2U-NuS26R6wvIa-4DAYjib_A',
    quote: 'Trabalhar com ele foi uma experiência incrível. Profissionalismo, qualidade e entrega no prazo. Recomendo fortemente!'
  },
  {
    name: 'Ethan Bennett',
    role: 'Founder, Innovate Co.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC52HOXyus2Pc9eZ_gED0ucTwrwGp6bUE_HMb_qVyqaFNJLu8Idvc_cS_VMAqM9RqZKZWlvHYONuQ95GbdxnFPj9UjU1VBWV5pic1h3vyEBlQS6ZxW-HtsMikZKC7UuUg7LddNaOztyNZ-iOpRpSaJFjzrbQpRgKwp0hE5bSGpQHS-9Zsu2PbjvaMeBI25zMqJnrei3FbOVgw37L6TJDJy0j9fyvJ9Uo4GrY4h03_JuQv884tGa7Zu_eo3zto9Y2IEy4KaNeRPU0Mk',
    quote: 'O projeto superou todas as nossas expectativas. A comunicação foi clara e o resultado final ficou impecável.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Depoimentos</h2>
          <p className="text-lg text-subtle-light dark:text-subtle-dark">
            O que meus clientes dizem sobre meu trabalho.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-8">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14">
                  <Image
                    alt={testimonial.name}
                    className="rounded-full object-cover"
                    src={testimonial.image}
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-subtle-light dark:text-subtle-dark">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <blockquote className="mt-6 text-subtle-light dark:text-subtle-dark">
                <p>&quot;{testimonial.quote}&quot;</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
