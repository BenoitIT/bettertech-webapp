import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { MessageTemplate } from "@/app/dashboard/(components)/emailTampltes/messageReplay";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
export const PUT = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const sendingAnemail = await resend.emails.send({
      from: "BTech@bettertechnology.tech",
      to: body.emails,
      subject: "Message from Better Technology LTD",
      react: MessageTemplate({
        message: body.message,
      }),
      text: "Thank you for you message to us",
    });
    return NextResponse.json({
      status: 200,
      data: sendingAnemail,
      message: "Your response has been sent",
    });
  } catch (err) {
    return NextResponse.json({
      message: "unexpected issue occurs",
      status: 400,
    });
  }
};
