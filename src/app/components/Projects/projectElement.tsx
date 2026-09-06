'use client'
import { motion } from "framer-motion";
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
    index?: number
}

const ProjectElement: React.FC<ProjectElementProps> = ({ title, description, image, href, tools, place, categories, index = 0 }) => {
    const colDelay = (index % 3) * 0.08;

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: colDelay }}
        >
            <a
                href={href}
                target="_blank"
                className="relative block bg-custom-light-gray p-6 rounded-xl drop-shadow-lg overflow-hidden cursor-pointer font-nunito hover:-translate-y-2 hover:bg-[#333942] transition-transform duration-300 ease-out h-full"
            >
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="font-bold text-xl">{title}</div>
                        <Line />
                        <Thumbnail image={image} />
                        <div className="text-sm mt-4">{description}</div>
                    </div>
                    <ProjectFooter tools={tools} place={place} categories={categories} />
                </div>
            </a>
        </motion.div>
    );
};

export default ProjectElement;
