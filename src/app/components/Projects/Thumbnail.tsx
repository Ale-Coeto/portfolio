import Image from "next/image";

interface ThumbnailProps {
    image: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image }) => {
    return (
        <div

        >
            <img
                className='
                h-32
                w-full
                object-cover
                rounded-lg
                my-4
                
                '

                src={image}
                alt="Image"
            />
        </div>
    )
}

export default Thumbnail;