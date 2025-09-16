"use client";

import { useEffect, useRef, useState } from "react";
import RoundedIcon from "../RoundedIcon";
import Subtitle from "../Subtitle";
import ImageView from "./ImageView";
import { FaMinus } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface InfoDisplayProps {
    item: {
        title: string
        position: string
        date: string
        info: string
        images: string[]
        bullets: string[]
        icon: string
        iconColor: string
        location?: string
    }
}
const InfoDisplay: React.FC<InfoDisplayProps> = ({
    item
}) => {
    const [seeMore, setSeeMore] = useState<boolean>(false);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const expandedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => setSeeMore(true), 500);
            return () => clearTimeout(timer);
        }
    }, [inView]);

    useEffect(() => {
        if (seeMore && expandedRef.current) {
            expandedRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }, [seeMore]);

    return (
        <div className="w-full">

            <div className="flex flex-row align-center mb-8 justify-between max-xl:flex-col max-xl:mb-0 ">
                <div className="flex flex-row gap-3">
                    <div className="self-center mr-2">
                        <RoundedIcon icon={item.icon} color={item.iconColor} size="xl" />
                    </div>
                    <div className="mt-[-35px]">
                        <Subtitle title={item.title} noUnderline />
                        <div className="self-center mt-[-25px] font-mono font-light text-custom-text-gray text-base">
                            {item.position}
                        </div>
                    </div>
                </div>


                <div className="flex flex-col justify-end text-end text-custom-text-gray text-sm font-fira-code mb-4 pb-4 max-lg:mt-4" >
                    <div>
                        {item.date}
                    </div>
                    <div className="italic">
                        {item.location}
                    </div>
                </div>
            </div>

            <div className="mb-1">
                {item.info}
            </div>
            <AnimatePresence>
                {seeMore && (
                    <motion.div
                        ref={expandedRef}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <div>
                            <ul className="pl-4 mb-2 marker:text-sky-400">
                                {item.bullets.map((bullet, key) => (
                                    <li key={key} className="list-disc">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                            {item.images.map((image, key) => (
                                image && <ImageView key={key} image={image} />
                            ))}
                            <button onClick={() => setSeeMore(false)} className="w-full text-sm flex flex-row justify-center align-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                                <FaMinus className="text-md mr-2" />
                                hide
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!seeMore && (
                <button ref={ref} onClick={() => setSeeMore(true)} className="w-full flex text-sm flex-row justify-center align-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                    <BsPlus className="text-2xl mr-2" />
                    See more
                </button>
            )}
        </div>
    )
}

export default InfoDisplay;