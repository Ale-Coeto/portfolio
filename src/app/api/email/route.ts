import { NextResponse } from "next/server";
import emailjs, { send } from '@emailjs/browser';
// import { send } from 'emailjs-com';

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

        console.log(templateParams)

        if (!name || !email || !message) {
            console.log("Missing fields")
            return new NextResponse("Missing fields", { status: 400 });
        }

        const sendEmail = (templateParams:any) => {
            console.log("sending email")
            const service = process.env.SERVICE_ID ?? ""
            const template = process.env.TEMPLATE_ID ?? ""
            const publicKey =  process.env.P_KEY ?? ""
            send("service_foq54ar","template_p2w9hgo", templateParams, "ue3nt1I8OfZhvIjye")
            // send(service,template, templateParams)
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
              }, (error) => {
                console.log('FAILED...', error);
              });
          }
        sendEmail(templateParams);
        

        return new NextResponse("Email sent", { status: 200 });

    } catch (error: any) {
        return new NextResponse(error, { status: 500 });
    }
}