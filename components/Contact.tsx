'use client'

import { FormEvent, useState } from 'react'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '')

    // Aplica a máscara conforme o tamanho
    if (numbers.length <= 2) {
      return numbers
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData({...formData, phone: formatted})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar email')
      }

      toast.success('Email enviado com sucesso! Em alguns minutos entraremos em contato.', {
        duration: 5000,
      })

      // Limpar o formulário
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
        phone: '',
      })
    } catch (error) {
      toast.error('Erro ao enviar email. Por favor, tente novamente.', {
        duration: 5000,
      })
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false)
    }
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Telefone
            </label>
            <input
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 shadow-sm focus:border-primary focus:ring-primary focus:outline-none focus:ring-2"
              id="phone"
              name="phone"
              placeholder="(XX) XXXXX-XXXX"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              maxLength={15}
              required
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            >
              <option value="">Selecione</option>
              <option value="landing-page">Landing Page</option>
              <option value="saas">SaaS</option>
              <option value="site-institucional">Site Institucional</option>
              <option value="app-mobile">Aplicativo Mobile</option>
              <option value="IA">IA</option>
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
              disabled={isSubmitting}
            ></textarea>
          </div>
          <div>
            <button
              className="w-full cursor-pointer inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
