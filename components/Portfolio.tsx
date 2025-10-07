import Image from 'next/image'

const projects = [
  {
    title: 'Projeto Web App',
    technologies: 'React, Node.js',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSkzJ0xzGI9ake-FUfeU4F56zoSt6y3JCP9gbwS86cVlKUiLw2fC1qCYvvfWtBlFVK9bBv5LV_tlUmyueHxwhgiA_uPUtS7zSQ9Zx6bqDEK0QP0tv5sLl-fTLlFohtiQPy6d8RmElEBgIn_3uyi2v7ZuaeeioUkUGG78xfV9C5vTTe0vfgL9FlKJptFtqMwrctsGZqf_beXVa-dWjSCcNsk-RVghMskmK0gnFkWzgQ0xSDvwAU1dm6WeFXGWGYW2HgOFCGW-YHEbY'
  },
  {
    title: 'E-commerce',
    technologies: 'Next.js, Shopify',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGS4261wSDL8c4jZNsFr0sZRbeWJidVCXMCfFV-ZnMQZvcHCTzWDwmejpsvwnx9DKuNIJTY-v_2GwAkeU41NiWgMT9J2ca8Lam8UgE6vT15oXYx75aLMx6rlvFq22O2ezWbLbUlJBKLl7TvU-hHC3MVj33jxGjIVVfqYm58pplmgXUKQ0BEB4nLUa_Y2z9ulmKE2j2tbdaolNhtXZp4Np_Btx8GtYW9HmH_V4Cq9DvV1aOANu6jTYjGljSTn_liyCmSbJWwHElAtY'
  },
  {
    title: 'Aplicativo Mobile',
    technologies: 'React Native',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAosStrMBYIREgRZv2rTI_S_llrLncqf7y_T3l6gXgZLqziY4WQdBfYMiSqbNq_HWpP205FD_e_VPiS5yGj2r06IPq-FpTjma8lHOZdHFUBrUfhBVJjIUY-4WvkolTf0p1LLHd2kLaTHANq0ojGb27FHGjYXcvOyn9w0in5rr6aIe3xIS5qnc-g9Nf-2qodeGlmgTYgD06ochOOdu7JFQ2MxGzzTqRv4XNpMe8Q_uoBrqiqo7DoFoN8k_B-2KcmN8uop8V8HK09NQ'
  }
]

export default function Portfolio() {
  return (
    <section className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Portfólio</h2>
          <p className="text-lg text-subtle-light dark:text-subtle-dark">
            Alguns dos projetos que já desenvolvi.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  alt={project.title}
                  className="object-cover transition-transform group-hover:scale-105"
                  src={project.image}
                  fill
                />
              </div>
              <div className="p-6 bg-surface-light dark:bg-surface-dark">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="mt-1 text-sm text-subtle-light dark:text-subtle-dark">
                  Tecnologias: {project.technologies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
