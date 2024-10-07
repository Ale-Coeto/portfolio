'use client'
import Tag from "../components/Contact/Tag";
import Title from "../components/Title";
import { BsEnvelope, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/Contact/Input";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import axios from "axios";
import dotenv from "dotenv";
import Divider from "../components/Divider";
import { FaEnvelope } from "react-icons/fa";





const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    const sendEmail: SubmitHandler<FieldValues> = (data) => {
        // axios.post('/api/email', data)
        // .then(() => {
        //     toast.success("Registered successfully")
        // })
        // .catch(() => toast.error("Something went wrong"))
        // .finally(() => setIsLoading(false));

        if (!data.name || !data.email || !data.message) {
            console.log("Missing fields")
            toast.error("Missing fields");
        } else if (!data.email.includes('@')) {
            console.log("Invalid email")
            toast.error("Invalid email");
        } else {
            const templateParams = {
                name: data.name,
                email: data.email,
                message: data.message
            };

            dotenv.config();
            const templateId = 'template_p2w9hgo' || process.env.TEMPLATE_ID as string;
            const serviceId = 'service_ukt3enr' || process.env.SERVICE_ID as string;
            const emailjsKey = 'ue3nt1I8OfZhvIjye' || process.env.REACT_APP_EMAILJS_KEY as string;

            //console.log(templateId, serviceId, emailjsKey)

            if (templateId !== undefined && serviceId != undefined && emailjsKey !== undefined) {
                emailjs.send(serviceId, templateId, templateParams, emailjsKey)
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    }, (error) => {
                        console.log('FAILED...', error);
                    }).then((res) => {
                        toast.success("Email sent");
                    }).catch((err) => {
                        toast.error("Error sending email");
                    });
            }

            else
                console.log("Missing env variables")
        }

    };

    return (
        <div id="contact">
            <Title number="04." title="Contact" />

            <form onSubmit={handleSubmit(sendEmail)}>
                <div className="flex md:flex-row flex-col gap-8 ">
                    <div className="md:w-5/12 font-fira-code">
                        <Input id="name" label="Name" errors={errors} disabled={isLoading} register={register} />
                        <Input id="email" label="Email" errors={errors} disabled={isLoading} register={register} />
                    </div>
                    <div className="w-full font-fira-code">
                        <Input id="message" label="Message" errors={errors} disabled={isLoading} register={register} textArea />
                    </div>

                </div>

                {/* <button type="submit" className=" bg-custom-text-dark-gray px-2 text-custom-dark-gray rounded-md font-fira-code font-semibold hover:underline">
                    Send
                </button> */}
                <div className="flex justify-end">
                    <button className=" bg-sky-500 rounded-full px-3 py-1 font-nunito text-custom-dark-gray font-semibold">
                        Send
                    </button>
                </div>

            </form>
            <Divider />
            <div className="flex lg:flex-row flex-col justify-between text-left mt-8">
                <div className="text-xl flex gap-3 ">
                    {/* <h1 className="font-bold pb-1">
                        Contact
                    </h1> */}
                    <Tag name="Ale-Coeto" icon={BsGithub} href="https://github.com/Ale-Coeto" />
                    <Tag name="alecocoeto" icon={BsLinkedin} href="https://www.linkedin.com/in/alecoeto/" />
                    <Tag name="alecoeto@hotmail.com" icon={FaEnvelope} href="mailto:alecoetos@gmail.com?subject=Contact portfolio&body=Contacting you through your portfolio" />
                </div>
                <div className="mt-5" />
                <p className="text-sm">
                    Last update: Oct 7, 2024
                </p>
            </div>

        </div>
    )
}

export default Contact;