'use client'
import { useState } from 'react';
import RoundedIcon from '../RoundedIcon';
import { motion } from 'framer-motion';

interface TechElementProps {
    icon: string
    name: string
    time: string
    level: number
    size?: string
    index?: number
}

const TechElement: React.FC<TechElementProps> = ({ icon, name, size }) => {
    const [glare, setGlare] = useState(false);

    return (
        <div
            className="relative flex flex-row gap-2 items-center m-2 bg-custom-light-gray shadow-md p-2 pr-3 rounded-full overflow-hidden cursor-pointer"
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
            <div className="font-nunito text-sm font-semibold">{name}</div>
        </div>
    );
};

export default TechElement;
