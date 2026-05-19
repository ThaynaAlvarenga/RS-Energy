import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, bill, message } = body;

  try {
    await resend.emails.send({
      from: "RS Energy Site <onboarding@resend.dev>",
      to: "contato@sunriseenergiasolar.com.br",
      subject: `Novo contato: ${name} – Conta R$${bill}`,
      html: `
        <h2>Novo contato pelo site RS Energy</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Valor da conta:</strong> R$ ${bill}</p>
        <p><strong>Mensagem:</strong> ${message || "Nenhuma mensagem adicional"}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao enviar e-mail" },
      { status: 500 }
    );
  }
}
