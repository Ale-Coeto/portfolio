"use client";
import { useEffect, useState } from "react";

function useTypewriter(text: string, speed = 80) {
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i === text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);
    return displayed;
}


const TypeWriter = () => {
    const typewriterText = useTypewriter("<Software Developer />", 80);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="pt-2 text-lg sm:text-xl font-fira-code text-custom-text-dark-gray mb-8 flex flex-row items-center">
            <span>{typewriterText}</span>
            <span className={showCursor ? "opacity-100" : "opacity-0"} style={{ transition: "opacity 0.2s" }}>|</span>
        </div>
    );
}

export default TypeWriter;
