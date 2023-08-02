import Image from "next/image";

interface ThumbnailProps {
    image: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image }) => {
    return (
        <div className="relative h-32 w-full overflow-hidden">
            <Image className="object-cover rounded-lg my-4'" fill referrerPolicy="no-referrer" src={image} alt="Project" />
        </div>
    )
}

export default Thumbnail;