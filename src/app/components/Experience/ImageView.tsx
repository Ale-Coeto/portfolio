import Image from "next/image";

interface ImageViewProps {
    image: string
}

const ImageView: React.FC<ImageViewProps> = ({ image }) => {
    return (
        <div
            className='
                    relative 
                    inline-block  
                    overflow-hidden
                    h-32
                    w-32

                    max-w-[180px]
                    bg-gray-200
                    mr-4
                '
        >
            <Image
                className='border-2 object-cover object-center'
                fill
                src={image}
                referrerPolicy="no-referrer"
                alt="Avatar"
            />
        </div>
    )
}

export default ImageView;