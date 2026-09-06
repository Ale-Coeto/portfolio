'use client'
import { useState } from 'react';
import RoundedIcon from '../RoundedIcon';
import { motion } from 'framer-motion';

interface IconElementProps {
    icon: string
    name: string
    time: string
    level: number
    size?: string
    index?: number
}

const IconElement: React.FC<IconElementProps> = ({ icon, name, time, size }) => {
    const [glare, setGlare] = useState(false);

    return (
        <div
            className="relative flex flex-row items-center bg-custom-light-gray p-2 pr-6 rounded-full m-2 shadow-md overflow-hidden cursor-pointer"
            onMouseEnter={() => setGlare(true)}
        >
            <motion.div
                initial={{ x: "-100%", skewX: -20 }}
                animate={{ x: glare ? "300%" : "-100%", skewX: -20 }}
                transition={{ duration: glare ? 0.5 : 0, ease: "easeOut" }}
                onAnimationComplete={() => { if (glare) setGlare(false); }}
                className="absolute top-0 left-0 h-full w-2/5 pointer-events-none"
                style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.14), transparent)" }}
            />
            <RoundedIcon icon={icon} size={size} />
            <div className="flex flex-col ml-0">
                <div className="font-nunito text-sm font-semibold">{name}</div>
                {time && (
                    <div className="text-custom-text-gray font-fira-code text-xs">{time}</div>
                )}
            </div>
        </div>
    );
};

export default IconElement;
