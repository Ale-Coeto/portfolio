"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs"
import Tag from "./Tag"
import { FaEnvelope } from "react-icons/fa"
import { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
    const [lastUpdate, setLastUpdate] = useState("");

    useEffect(() => {
        const fetchLastUpdate = async () => {
            try {
                const res = await fetch("https://api.github.com/repos/Ale-Coeto/portfolio/commits");
                const data = await res.json();
                const dateStr = data[0].commit.author.date;
                const date = new Date(dateStr).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                });
                setLastUpdate(date);
            } catch (err) {
                console.error("Failed to fetch commit date", err);
            }
        };

        fetchLastUpdate();
    }, []);

    return (
        <>
            <div className="flex lg:flex-row flex-col justify-between items-center text-left mt-8">
                <div className="text-xl flex gap-3 flex-1 items-center">
                    <Tag name="Ale-Coeto" icon={BsGithub} href="https://github.com/Ale-Coeto" />
                    <Tag name="alecocoeto" icon={BsLinkedin} href="https://www.linkedin.com/in/alecoeto/" />
                    <Tag name="alecoeto@hotmail.com" icon={FaEnvelope} href="mailto:alecoetos@gmail.com?subject=Contact portfolio&body=Contacting you through your portfolio" />
                </div>
                <div className="flex-none mx-4 md:py-0 py-4">
                    <Image src="/icon.png" alt="Logo" width={40} height={40} className="rounded-full" />
                </div>
                <p className="text-sm flex items-center gap-4 flex-1 justify-end text-right">
                    Last update: {lastUpdate || "Loading..."}
                </p>
            </div>
        </>
    )
}

export default Footer;