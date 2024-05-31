import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface ImageViewProps {
    image: string
}

const ImageView: React.FC<ImageViewProps> = ({ image }) => {
    const [loading, setLoading] = useState(false);
    if (!image)
        setLoading(true);


    return (
        <div
            className={clsx(
                // loading && 'animate-pulse',
                `
                    relative 
                    inline-block  
                    overflow-hidden
                    h-32
                    w-32

                    max-w-[180px]
                    bg-gray-200
                    mr-4
                `)}
        >
            <Image
                className={clsx(
                    // loading && 'animate-pulse', 
                    'border-2 object-cover object-center')}
                fill
                src={image}
                referrerPolicy="no-referrer"
                alt="Avatar"
            />
        </div>
    )
}

export default ImageView;