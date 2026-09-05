"use client";
import { useEffect, useState } from "react";

function useTypewriter(text: string, speed = 80, delay = 0) {
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        const timeout = setTimeout(() => {
            let i = 0;
            interval = setInterval(() => {
                setDisplayed(text.slice(0, i + 1));
                i++;
                if (i === text.length) clearInterval(interval);
            }, speed);
        }, delay);
        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, speed, delay]);
    return displayed;
}


const TypeWriter = ({ delay = 0 }: { delay?: number }) => {
    const typewriterText = useTypewriter("<Software Developer />", 80, delay);
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
