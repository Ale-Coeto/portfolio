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
import Footer from "../components/Contact/Footer";





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

            emailjs.send("serviceId", "templateId", templateParams, "emailjsKey")
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

    };

    return (
        <div id="contact">
            <Title number="05." title="Contact" />

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
            <Footer />

        </div>
    )
}

export default Contact;