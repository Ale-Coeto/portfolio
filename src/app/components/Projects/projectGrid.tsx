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

const ProjectGrid: React.FC<ProjectGridProps> = ({ items, short, show_categories, header }) => {
    const [all, setAll] = useState(true);
    const tags_name = Array.from(tags.keys());
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
    const [gridOverflow, setGridOverflow] = useState<"hidden" | "visible">("hidden");
    const VIEW_LIMIT = 6;

    useEffect(() => {
        const timer = setTimeout(() => { }, 300);
        return () => clearTimeout(timer);
    }, [selectedTags]);

    useEffect(() => {
        if (!all) setGridOverflow("hidden");
    }, [all]);

    const filteredItems = items.filter(item =>
        selectedTags.size === 0 ||
        (item.categories && item.categories.some(tag => selectedTags.has(tag)))
    );

    const handleClick = (tag: string) => {
        const next = new Set(selectedTags);
        next.has(tag) ? next.delete(tag) : next.add(tag);
        setSelectedTags(next);
    };

    const handleClose = () => {
        setAll(true);
        window.location.href = `${window.location.origin}/#${header}`;
    };

    return (
        <div className="md:px-10 text-sm">
            <p>Select categories to filter the projects:</p>
            {show_categories && (
                <motion.div
                    className="sticky top-16 z-40 flex justify-center py-3 mb-4"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.5, ease: "easeOut" as const }}
                >
                    <div className="flex flex-row flex-wrap gap-2 bg-custom-dark-gray/95 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2 shadow-lg">
                        {tags_name.map((tag, key) => (
                            <div
                                key={key}
                                onClick={() => handleClick(tag)}
                                className={clsx(
                                    'inline-block px-2 py-1 rounded-md mr-2 text-xs hover:underline hover:cursor-pointer',
                                    selectedTags.has(tag) ? tags_bg.get(tag) : tags.get(tag),
                                )}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {all ? (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" as const }}
                    style={{ overflow: gridOverflow }}
                    onAnimationComplete={() => setGridOverflow("visible")}
                >
                    <div className={clsx('grid gap-6',
                        short ? `lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`
                            : `sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`
                    )}>
                        {filteredItems.slice(0, VIEW_LIMIT).map((item, key) => (
                            <ProjectElement key={key} index={key} title={item.title} description={item.description} image={item.image} href={item.href} tools={item.tools} place={item.place} categories={item.categories} />
                        ))}
                    </div>
                    {filteredItems.length > VIEW_LIMIT && (
                        <button onClick={() => setAll(false)} className="w-full flex flex-row justify-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                            <BsPlus className="text-2xl mr-2" />
                            <span>See all</span>
                        </button>
                    )}
                </motion.div>
            ) : (
                <div>
                    <div className={clsx('grid gap-4',
                        short ? `lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`
                            : `sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`
                    )}>
                        {filteredItems.map((item, key) => (
                            <ProjectElement key={key} index={key} title={item.title} description={item.description} image={item.image} href={item.href} tools={item.tools} place={item.place} categories={item.categories} />
                        ))}
                    </div>
                    <button onClick={handleClose} className="w-full flex flex-row justify-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                        <FaMinus className="text-md mr-2" />
                        <span>See less</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectGrid;
