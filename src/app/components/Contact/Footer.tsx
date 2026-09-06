"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const socialLinks = [
    { icon: BsGithub, label: "Ale-Coeto", href: "https://github.com/Ale-Coeto" },
    { icon: BsLinkedin, label: "alecocoeto", href: "https://www.linkedin.com/in/alecoeto/" },
    { icon: FaEnvelope, label: "alecoetos@gmail.com", href: "mailto:alecoetos@gmail.com?subject=Contact portfolio&body=Contacting you through your portfolio" },
];

const Footer = () => {
    const [lastUpdate, setLastUpdate] = useState("");

    useEffect(() => {
        const fetchLastUpdate = async () => {
            try {
                const res = await fetch("https://api.github.com/repos/Ale-Coeto/portfolio/commits");
                const data = await res.json();
                const date = new Date(data[0].commit.author.date).toLocaleDateString("en-US", {
                    month: "short", day: "numeric", year: "numeric",
                });
                setLastUpdate(date);
            } catch {
            }
        };
        fetchLastUpdate();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex lg:flex-row flex-col justify-between items-center gap-6 mt-8"
        >
            <div className="flex gap-5 flex-1 items-center">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-custom-text-dark-gray hover:text-white transition-colors duration-200"
                    >
                        <Icon className="text-sky-400 group-hover:text-sky-300 transition-colors duration-200 text-lg" />
                        <span className="text-sm hidden xl:block">{label}</span>
                    </a>
                ))}
            </div>

            <div className="flex-none">
                <Image src="/icon.png" alt="Logo" width={36} height={36} className="rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200" />
            </div>

            <p className="text-xs text-custom-text-dark-gray flex-1 text-right font-fira-code">
                Last updated: <span className="text-custom-text-gray">{lastUpdate || "…"}</span>
            </p>
        </motion.div>
    );
};

export default Footer;
