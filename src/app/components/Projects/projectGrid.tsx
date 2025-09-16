"use client";
import clsx from "clsx"
import ProjectElement from "./projectElement"
import { FaMinus } from "react-icons/fa"
import { BsPlus } from "react-icons/bs"
import { useEffect, useState } from "react"
import { tags, tags_bg } from "@/app/Utils/tags"
import { motion } from "framer-motion";

interface ProjectGridProps {
    items: {
        title: string
        description: string
        image: string
        href: string
        tools?: string
        place?: string[]
        categories?: string[]
    }[]
    short?: boolean,
    show_categories?: boolean,
    header: string
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
    items,
    short,
    show_categories,
    header
}) => {
    const [all, setAll] = useState(true);
    const tags_name = Array.from(tags.keys());
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
    const [animating, setAnimating] = useState(false);
    const VIEW_LIMIT = 6;

    useEffect(() => {
        setAnimating(true);
        const timer = setTimeout(() => {
            setAnimating(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [selectedTags]);

    const handleClick = (tag: string) => {
        if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
        } else {
            selectedTags.add(tag);
        }
        setSelectedTags(new Set(selectedTags));
    }

    const handleClose = (value: boolean) => {
        setAll(value);
        const target = `${window.location.origin}/#${header}`;
        window.location.href = target;
    }

    return (
        <div className="md:px-10 text-sm">
            {show_categories && (
                <motion.div
                className="leading-tight"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
               <div className="flex flex-row justify-start md:justify-center flex-wrap gap-2 mb-5">
                    {tags_name.map((tag, key) => (
                        <div key={key} onClick={() => handleClick(tag)} className={clsx(
                            'inline-block px-2 py-1 rounded-md mr-2 text-xs hover:underline hover:cursor-pointer',
                            tag && selectedTags.has(tag) ? tags_bg.get(tag) : '',
                            tag && selectedTags.has(tag) == false ? tags.get(tag) : '',
                        )}>
                            {tag}
                        </div>
                    ))}
                </div>
            </motion.div>
                
            )}
            {all ?
                (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className={clsx('grid gap-6',
                            short && `lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`,
                            !short && `sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`
                        )}
                        >
                            {items.filter(item =>
                                selectedTags.size === 0 ||
                                (item.categories && item.categories.some(tag => selectedTags.has(tag)))
                            )
                                .slice(0, VIEW_LIMIT).map((item, key) => (
                                    <ProjectElement key={key} title={item.title} description={item.description} image={item.image} href={item.href} tools={item.tools} place={item.place} categories={item.categories} />
                                ))}
                        </div>
                        {items.filter(item =>
                            selectedTags.size === 0 ||
                            (item.categories && item.categories.some(tag => selectedTags.has(tag)))
                        ).length > VIEW_LIMIT && (
                                <button onClick={() => setAll(false)} className="w-full flex flex-row justify-center align-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                                    <BsPlus className="text-2xl mr-2" />
                                    <div>
                                        See all
                                    </div>
                                </button>
                            )}
                    </motion.div>
                )
                :
                <div>
                    <div className={clsx('grid gap-4',
                        short && `lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`,
                        !short && `sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`
                    )}
                    >
                        {items.filter(item =>
                            selectedTags.size === 0 ||
                            (item.categories && item.categories.some(tag => selectedTags.has(tag)))
                        )
                            .map((item, key) => (
                                <ProjectElement key={key} title={item.title} description={item.description} image={item.image} href={item.href} tools={item.tools} place={item.place} categories={item.categories} />
                            ))}
                    </div>
                    <button onClick={() => handleClose(true)} className="w-full flex flex-row justify-center align-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                        <FaMinus className="text-md mr-2" />
                        <div>
                            See less
                        </div>
                    </button>

                </div>
            }
        </div>
    )
}

export default ProjectGrid;