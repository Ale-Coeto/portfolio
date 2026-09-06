"use client";
import { motion } from "framer-motion";

const EndLines = ({ top }: { top?: boolean }) => {
    return (
        <div className="pl-12 md:pl-20 w-full">
            <div className="flex flex-col items-center w-4">
                {!top && (
                    <motion.div
                        className="h-24 w-0 border-l border-custom-text-gray/50"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                        style={{ transformOrigin: "top" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                )}
                <motion.div
                    className="border h-2 w-2 border-custom-text-gray rounded-full bg-custom-text-gray"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {top && (
                    <motion.div
                        className="h-20 w-0 border-l border-custom-text-gray/50"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "0px 0px -40% 0px" }}
                        style={{ transformOrigin: "top" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                )}
            </div>
        </div>
    );
};

export default EndLines;
