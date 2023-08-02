import Image from "next/image";

interface ThumbnailProps {
    image: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image }) => {
    return (
        <div>
            <Image width={200} height={200} className=' h-32 w-full object-cover rounded-lg my-4' src={image} alt="Image" />
        </div>
    )
}

export default Thumbnail;