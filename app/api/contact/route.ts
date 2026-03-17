import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; subject?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "お名前、メールアドレス、お問い合わせ内容は必須です。" },
      { status: 400 }
    );
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Graceful fallback: log to console in development
    console.log("[Contact Form] RESEND_API_KEY is not set. Logging form data instead:");
    console.log({
      from: "onboarding@resend.dev",
      to: "solo.quest.app@gmail.com",
      subject: `[Solo Quest お問い合わせ] ${subject ?? "その他"}`,
      name,
      email,
      message,
    });
    return NextResponse.json({ success: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "solo.quest.app@gmail.com",
      subject: `[Solo Quest お問い合わせ] ${subject ?? "その他"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 8px;">
            Solo Quest お問い合わせ
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 160px;">お名前</td>
              <td style="padding: 8px 0; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">メールアドレス</td>
              <td style="padding: 8px 0; color: #1e293b;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">お問い合わせの種類</td>
              <td style="padding: 8px 0; color: #1e293b;">${subject ?? "その他"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; vertical-align: top;">お問い合わせ内容</td>
              <td style="padding: 8px 0; color: #1e293b; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="margin-top: 24px; border-color: #e2e8f0;" />
          <p style="color: #94a3b8; font-size: 12px; margin-top: 12px;">
            このメールは Solo Quest お問い合わせフォームから送信されました。
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact Form] Resend error:", error);
      return NextResponse.json(
        { error: "メールの送信に失敗しました。しばらくしてから再度お試しください。" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact Form] Unexpected error:", err);
    return NextResponse.json(
      { error: "予期しないエラーが発生しました。しばらくしてから再度お試しください。" },
      { status: 500 }
    );
  }
}
