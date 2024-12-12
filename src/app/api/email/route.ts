import { NextResponse } from "next/server";
// import emailjs, { send } from '@emailjs/browser';
import { send } from 'emailjs-com';
import axios from "axios";

export async function POST(req: Request) {
    try {

        const body = await req.json();
        const {
            name,
            email,
            message
        } = body;

        const templateParams = {
            name: name,
            email: email,
            message: message
        };


        if (!name || !email || !message) {
            console.log("Missing fields")
            return new NextResponse("Missing fields", { status: 400 });
        }

        const service = process.env.SERVICE_ID ?? ""
        const template = process.env.TEMPLATE_ID ?? ""
        const publicKey =  process.env.P_KEY ?? ""
        console.log(service, template, publicKey)

        const data = {
            service_id: service, 
            template_id: template, 
            user_id: publicKey, 
            template_params: {
                name: name,
                email: email, 
                message: message,
            },
        };

        console.log(data)
        try {
            const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Email sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending email:", error || "");
        }


        return new NextResponse("Email sent", { status: 200 });

    } catch (error: any) {
        return new NextResponse(error, { status: 500 });
    }
}