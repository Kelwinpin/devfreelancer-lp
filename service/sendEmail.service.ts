import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

interface EmailData {
    name: string;
    email: string;
    projectType: string;
    message: string;
    phone: string;
}

const generateEmailHTML = (data: EmailData): string => {
    const projectTypeLabel = data.projectType.charAt(0).toUpperCase() + data.projectType.slice(1);
    const currentDate = new Date().toLocaleString('pt-BR', {
        dateStyle: 'long',
        timeStyle: 'short'
    });

    return `<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Novo Contato - Landing Page</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f4f4;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: #ffffff;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
            }
            .header p {
                margin: 10px 0 0 0;
                font-size: 14px;
                opacity: 0.9;
            }
            .content {
                padding: 40px 30px;
            }
            .info-block {
                margin-bottom: 25px;
            }
            .info-label {
                font-size: 12px;
                text-transform: uppercase;
                color: #667eea;
                font-weight: 600;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
            }
            .info-value {
                font-size: 16px;
                color: #333333;
                padding: 12px;
                background-color: #f8f9fa;
                border-left: 3px solid #667eea;
                border-radius: 4px;
            }
            .message-box {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 6px;
                border-left: 3px solid #764ba2;
                margin-top: 10px;
            }
            .message-box p {
                margin: 0;
                color: #333333;
                line-height: 1.6;
                font-size: 15px;
                white-space: pre-wrap;
            }
            .project-type-badge {
                display: inline-block;
                padding: 8px 16px;
                background-color: #667eea;
                color: #ffffff;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
                text-transform: capitalize;
            }
            .footer {
                background-color: #f8f9fa;
                padding: 20px;
                text-align: center;
                border-top: 1px solid #e9ecef;
            }
            .footer p {
                margin: 0;
                color: #6c757d;
                font-size: 13px;
            }
            .cta-button {
                display: inline-block;
                margin-top: 20px;
                padding: 12px 30px;
                background-color: #667eea;
                color: #ffffff;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                transition: background-color 0.3s;
            }
            .divider {
                height: 1px;
                background-color: #e9ecef;
                margin: 30px 0;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Header -->
            <div class="header">
                <h1>📧 Novo Contato Recebido</h1>
                <p>Você recebeu uma nova mensagem através da sua Landing Page</p>
            </div>

            <!-- Content -->
            <div class="content">
                <!-- Name -->
                <div class="info-block">
                    <div class="info-label">👤 Nome</div>
                    <div class="info-value">${data.name}</div>
                </div>

                <!-- Email -->
                <div class="info-block">
                    <div class="info-label">✉️ Email</div>
                    <div class="info-value">
                        <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">
                            ${data.email}
                        </a>
                    </div>
                </div>

                <!-- Phone -->
                <div class="info-block">
                    <div class="info-label">📞 Telefone</div>
                    <div class="info-value">
                        <a href="tel:${data.phone}" style="color: #667eea; text-decoration: none;">
                            ${data.phone}
                        </a>
                    </div>
                </div>

                <!-- Project Type -->
                <div class="info-block">
                    <div class="info-label">🎯 Tipo de Projeto</div>
                    <div class="info-value">
                        <span class="project-type-badge">${projectTypeLabel}</span>
                    </div>
                </div>

                <div class="divider"></div>

                <!-- Message -->
                <div class="info-block">
                    <div class="info-label">💬 Mensagem</div>
                    <div class="message-box">
                        <p>${data.message}</p>
                    </div>
                </div>

                <!-- CTA Button -->
                <div style="text-align: center;">
                    <a href="mailto:${data.email}" class="cta-button">
                        Responder Email
                    </a>
                </div>
            </div>

            <!-- Footer -->
            <div class="footer">
                <p>Este email foi gerado automaticamente pelo formulário de contato da sua Landing Page</p>
                <p style="margin-top: 10px; font-size: 12px;">
                    Data: ${currentDate}
                </p>
            </div>
        </div>
    </body>
    </html>`;
};

const generateEmailText = (data: EmailData): string => {
    const projectTypeLabel = data.projectType.charAt(0).toUpperCase() + data.projectType.slice(1);
    return `
        NOVO CONTATO RECEBIDO

        Nome: ${data.name}
        Email: ${data.email}
        Tipo de Projeto: ${projectTypeLabel}
        Telefone: ${data.phone}
        Mensagem:
        ${data.message}

        ---
        Este email foi gerado automaticamente pelo formulário de contato da sua Landing Page
        Data: ${new Date().toLocaleString('pt-BR')}
    `.trim();
};

export const sendEmail = async (data: EmailData) => {
    const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    const subject = `Novo Contato via LP - ${data.name}`;

    const html = generateEmailHTML(data);
    const text = generateEmailText(data);

    const mailOptions = {
        from: '"Sistema de Entrega" <sistemadeenvioautomatico2@gmail.com>',
        to,
        subject,
        text,
        html,
    };

    await transporter.sendMail(mailOptions).then(
        (info) => {
            transporter.close();
            return info;
        },
        (error) => {
            console.error('Error sending email:', error);
            throw error;
        },
    );
};
