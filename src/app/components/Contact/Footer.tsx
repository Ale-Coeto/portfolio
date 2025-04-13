"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs"
import Tag from "./Tag"
import { FaEnvelope } from "react-icons/fa"
import { useEffect, useState } from "react";

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
        <div className="flex lg:flex-row flex-col justify-between text-left mt-8">
            <div className="text-xl flex gap-3 ">
                <Tag name="Ale-Coeto" icon={BsGithub} href="https://github.com/Ale-Coeto" />
                <Tag name="alecocoeto" icon={BsLinkedin} href="https://www.linkedin.com/in/alecoeto/" />
                <Tag name="alecoeto@hotmail.com" icon={FaEnvelope} href="mailto:alecoetos@gmail.com?subject=Contact portfolio&body=Contacting you through your portfolio" />
            </div>
            <div className="mt-5" />
            <p className="text-sm">
                Last update: {lastUpdate || "Loading..."}
            </p>
        </div>
    )
}

export default Footer;