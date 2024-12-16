import Line from "./Line";
import Thumbnail from "./Thumbnail";
import ProjectFooter from "./ProjectFooter";

interface ProjectElementProps {
    title: string
    description: string
    image: string
    href: string
    tools?: string
    place?: string[]
    categories?: string[]
}


const ProjectElement: React.FC<ProjectElementProps> = ({ title, description, image, href, tools, place, categories }) => {
    return (
        <a href={href} target="_blank"
            className=" bg-custom-light-gray p-6 rounded-xl z-1 drop-shadow-lg transition: transform 0.15s hover:-translate-y-1 hover:bg-[#333942] cursor-pointer font-nunito"
        >
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="font-bold text-xl">
                        {title}
                    </div>

                    <Line />
                    <Thumbnail image={image} />

                    <div className="text-sm mt-4">
                        {description}
                    </div>
                </div>

                <ProjectFooter tools={tools} place={place} categories={categories} />
            </div>

        </a>
    )
}

export default ProjectElement;