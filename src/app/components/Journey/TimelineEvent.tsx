"use client";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import JourneyEvent from "@/app/components/Journey/Event"

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

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const viewportCenter = window.innerHeight / 2;
                const elementCenter = rect.top + rect.height / 2;
                const distance = Math.abs(viewportCenter - elementCenter);
                if (distance < 100) {
                    setFocusedIndex(index);
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [index, setFocusedIndex]);

    const isFocused = focusedIndex === index;

    return (
        <div className="w-full flex flex-row items-center">
            <motion.div
                ref={ref}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: isFocused ? 1 : 0.5 }}
                transition={{ duration: 1.1 }}
                className="flex items-center"
            >
                <div className="flex flex-row items-center md:w-32">
                    <div className="absolute w-10 font-fira-code text-sm text-custom-text-dark-gray">
                        {date}
                    </div>
                    <div className="absolute pl-12 md:pl-20 flex flex-col justify-center items-center">
                        <div className="h-16 border-l w-0 border-custom-text-gray" />
                        <div className={`border h-4 w-4 border-white rounded-full  ${places ? 'bg-sky-500' : 'bg-custom-green'}`} />
                        <div className="h-16 border-l w-0 border-custom-text-gray" />
                    </div>
                </div>
            </motion.div>
            <motion.div
                ref={ref}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: isFocused ? 1.3 : 0.8, opacity: isFocused ? 1 : 0.5 }}
                transition={{ duration: 1.1, type: "spring" }}
                className="flex items-center"
            >
                <JourneyEvent
                    title={title}
                    description={description}
                    date={date}
                    image={image}
                    href={href}
                    places={places}
                />
            </motion.div>
        </div>
    );
};

export default TimelineEvent;