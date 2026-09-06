"use client";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import JourneyEvent from "@/app/components/Journey/Event";

interface TimelineEventProps {
    title: string;
    description: string;
    date: string;
    image?: string;
    href?: string;
    places?: string[];
    index: number;
    focusedIndex: number;
    setFocusedIndex: (idx: number) => void;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ title, description, date, image, href, places, index, focusedIndex, setFocusedIndex }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isFocused = focusedIndex === index;

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const viewportCenter = window.innerHeight / 2;
                const elementCenter = rect.top + rect.height / 2;
                if (Math.abs(viewportCenter - elementCenter) < 100) {
                    setFocusedIndex(index);
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [index, setFocusedIndex]);

    return (
        <div className="w-full flex flex-row items-center">
            <div ref={ref} className="flex items-center">
                <div className="flex flex-row items-center md:w-32">
                    <motion.div
                        className="absolute w-10 font-fira-code text-sm text-custom-text-dark-gray"
                        animate={{ opacity: isFocused ? 1 : 0.4 }}
                        transition={{ duration: 1.1 }}
                    >
                        {date}
                    </motion.div>
                    <div className="absolute pl-12 md:pl-20 flex flex-col justify-center items-center">
                        <motion.div
                            className="h-16 w-0 border-l border-custom-text-gray"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                            style={{ transformOrigin: "top" }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                        />
                        <motion.div
                            className={`border h-4 w-4 border-white rounded-full ${places ? 'bg-sky-500' : 'bg-custom-green'}`}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        />
                        <motion.div
                            className="h-16 w-0 border-l border-custom-text-gray"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                            style={{ transformOrigin: "top" }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
                        />
                    </div>
                </div>
            </div>

            <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <motion.div
                    animate={{ opacity: isFocused ? 1 : 0.4 }}
                    transition={{ duration: 1.1 }}
                >
                    <JourneyEvent
                        title={title}
                        description={description}
                        date={date}
                        image={image}
                        href={href}
                        places={places}
                        isFocused={isFocused}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TimelineEvent;
