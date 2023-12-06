'use client'
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface RoundedIconProps {
    icon: string
    color?: string
    size?: string
}

const RoundedIcon: React.FC<RoundedIconProps> = ({ icon, color, size }) => {
    const [loading, setLoading] = useState(false);
    if (!icon)
        setLoading(true);
    // else
    //     setLoading(false);
    return (
        <div
            className={clsx(` relative  inline-block  rounded-full  overflow-hidden  border-2 border-solid border-gray-100`,
                color == 'blue' && 'bg-blue-900',
                color == 'black' && 'bg-gray-900',
                !color && 'bg-gray-200',
                size == 'xl' ? 'h-16 w-16 p-0' : "h-14 w-14 mr-4",
                // loading && 'animate-pulse',
            )}
        >
            <Image className={clsx('object-cover',
                // loading && 'animate-pulse',
                size == 'xl' ? 'scale-80' : "scale-100"
            )} fill src={icon} referrerPolicy="no-referrer" alt="Image" />
        </div>
    )
}

export default RoundedIcon;