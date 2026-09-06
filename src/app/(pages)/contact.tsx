'use client'
import Title from "../components/Title";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/Contact/Input";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Divider from "../components/Divider";
import Footer from "../components/Contact/Footer";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FieldValues>({
        defaultValues: { name: '', email: '', message: '' }
    });

    const sendEmail: SubmitHandler<FieldValues> = (data) => {
        if (!data.name || !data.email || !data.message) {
            toast.error("Missing fields");
            return;
        }
        if (!data.email.includes('@')) {
            toast.error("Invalid email");
            return;
        }

        setIsLoading(true);
        const service = process.env.NEXT_PUBLIC_SERVICE_ID ?? "";
        const template = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
        const publicKey = process.env.NEXT_PUBLIC_P_KEY ?? "";

        emailjs.send(service, template, { name: data.name, email: data.email, message: data.message }, publicKey)
            .then(() => {
                toast.success("Email sent!");
                setSent(true);
                reset();
            })
            .catch(() => toast.error("Error sending email"))
            .finally(() => setIsLoading(false));
    };

    return (
        <div id="contact">
            <Title number="05." title="Contact" />

            <form onSubmit={handleSubmit(sendEmail)}>
                <div className="flex md:flex-row flex-col gap-8">
                    <motion.div {...fadeUp(0.1)} className="md:w-5/12 font-poppins">
                        <Input id="name" label="Name" errors={errors} disabled={isLoading} register={register} />
                        <Input id="email" label="Email" errors={errors} disabled={isLoading} register={register} />
                    </motion.div>
                    <motion.div {...fadeUp(0.18)} className="w-full font-fira-code">
                        <Input id="message" label="Message" errors={errors} disabled={isLoading} register={register} textArea />
                    </motion.div>
                </div>

                <motion.div {...fadeUp(0.24)} className="flex justify-end mt-2">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="relative flex items-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 rounded-full px-5 py-1.5 font-nunito text-custom-dark-gray font-semibold text-sm"
                    >
                        {isLoading && (
                            <svg className="animate-spin h-4 w-4 text-custom-dark-gray" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                        )}
                        {isLoading ? "Sending…" : sent ? "Sent ✓" : "Send"}
                    </button>
                </motion.div>
            </form>

            <Divider />
            <Footer />
        </div>
    );
};

export default Contact;
