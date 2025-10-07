import Image from 'next/image'

const services = [
  {
    title: 'Landing Pages',
    description: 'Criação de páginas de destino otimizadas para conversão e com design atraente.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJrMbvBbl9VOQSl1vVT0t_-2A8B39qCERTPhCWAiPeh35OLd6W9B273s-lxKpngSqx-IQwafivBOt5SEwst6zp-5ClxkMaJGxvtfijBFmmKAzUC50tu0tkluJDy7NnMVxU0fy7VYh1ksUkGVXCzJ7oL_zDk9fmw5VABY7DLdcRJH1_RvaeXKNWB7iBr7qS4vbdWF8J6w8isBGXoO57zXB8f1a12Oz1mAO3ONJctSLpa0H5cyF-i6dnwRC0s9rGwTMo5bKwsUhPloM'
  },
  {
    title: 'SaaS',
    description: 'Desenvolvimento de plataformas SaaS escaláveis e com foco na experiência do usuário.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBikrYN4ABQBUyjtY9ipB41S4728P-JhQQp06U1ILZVCcA8WbLo7t4n3_S7imSiRA4w5vqoGrQxyaIH929Bj9VWlBjrYlo5-k6r7pHtR-f4HGL37uU-QvMKEl3cLywVqUV9Kph3JjP6HAL9c2uAi25uP892RF6zEl4_LCodUVNG7kjLtBWm-Pf785y7aYbs6A55lAufgFS3-oqrGBSYALmWIpTFN5uJlKvrk_gAKL2PLe4tiUeR1ekyzHobD67L4GrwgEwJNZdeQRY'
  },
  {
    title: 'Sites Institucionais',
    description: 'Criação de sites institucionais modernos e responsivos para sua empresa.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHcUvZiP0o3BkO1zFXrxdw-2eBoR0z3nL5x0MAluLfUveelE0nbDC5zuRzZ0LYwyOyTyWqtXw_it_QGx_0FOCAvaxbW8B8uagUDURZuQgZ4T37pMnKAIx9oAHRiwqSMRxYo62IlQfe2GaAgP4h5WwQA6jp3LsVbcuEqA63NS2p_uUokV_WgCItH6wa1_r3JZp3jdLGnNrfXhmsS9P8gv4fqa2lv7EOrMkyMkOY5AkPwII_lhe0HkwKRzTjIG-6AbYcM0e328uJ3bM'
  },
  {
    title: 'Aplicativos Mobile',
    description: 'Desenvolvimento de aplicativos mobile nativos e multiplataforma para iOS e Android.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVT8EjB2N9i-IPh6sxSRFfs25mdfO3643x8lxjoxQrp7nXFHEzWg0hr-cKlngV-HGSEOW_O-ibdzgzjh24S0HHBZs3GIri-uU1ySVWSJoM36Bp0nRnQ5_uSbsr69D5Cua0XwkgvNC02lxanvFZqjnlinwprF4GWYBFaR3Xb9gNiGi7Owy2yTx3rA0zUWJpfZ50rTH2qVW-LcL8FEKr0uM88MpUI_aOjAzxn7QGP3klvcSLtAoPHSKjcFFAGh8HGduIZjMi0e7ym_4'
  }
]

export default function Services() {
  return (
    <section className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark" id="services">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meus Serviços</h2>
          <p className="text-lg text-subtle-light dark:text-subtle-dark">
            Soluções completas para levar seu projeto ao próximo nível.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0 relative w-16 h-16">
                <Image
                  className="rounded-lg object-cover"
                  src={service.image}
                  alt={service.title}
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-1 text-subtle-light dark:text-subtle-dark">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
