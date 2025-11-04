import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/service/sendEmail.service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, projectType, message, phone } = body;

    // Validação básica
    if (!name || !email || !projectType || !message || !phone) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Enviar email
    await sendEmail({
      name,
      email,
      projectType,
      message,
      phone,
    });

    return NextResponse.json(
      { success: true, message: 'Email enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente.' },
      { status: 500 }
    );
  }
}
