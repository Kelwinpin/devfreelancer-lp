'use client'

import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
  }

  return (
    <section className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vamos conversar?</h2>
          <p className="text-lg text-subtle-light dark:text-subtle-dark">
            Preencha o formulário abaixo para iniciarmos seu projeto.
          </p>
        </div>
        <form className="mx-auto max-w-xl space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Nome
            </label>
            <input
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 shadow-sm focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
              id="name"
              name="name"
              placeholder="Seu nome"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 shadow-sm focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
              id="email"
              name="email"
              placeholder="Seu email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="project-type">
              Tipo de Projeto
            </label>
            <select
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 shadow-sm focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
              id="project-type"
              name="project-type"
              value={formData.projectType}
              onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              required
            >
              <option value="">Selecione</option>
              <option value="landing-page">Landing Page</option>
              <option value="saas">SaaS</option>
              <option value="site-institucional">Site Institucional</option>
              <option value="app-mobile">Aplicativo Mobile</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 shadow-sm focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
              id="message"
              name="message"
              placeholder="Descreva seu projeto"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>
          <div>
            <button
              className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105"
              type="submit"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
