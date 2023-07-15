import clsx from "clsx";
import Line from "./Line";
import Thumbnail from "./Thumbnail";

interface ProjectElementProps {
    title: string
    description: string
    image: string
    href: string
}

const ProjectElement: React.FC<ProjectElementProps> = ({
    title,
    description,
    image,
    href
}) => {
    return (
        <a href={href} target="_blank"
            className="
                bg-custom-light-gray
                p-6
                rounded-xl
                relative
                z-1
                drop-shadow-lg
                transition: transform 0.15s
                hover:-translate-y-1
                hover:bg-[#333942]
                cursor-pointer
                font-nunito
                "
        >
            <div
                className="
                    font-bold
                    text-xl
                "
            >
                {title}
            </div>

            <Line />
            <Thumbnail image={image} />

            <div className="text-base">
                {description}
            </div>

        </a>
    )
}

export default ProjectElement;