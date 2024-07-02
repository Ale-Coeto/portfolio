"use client";
import clsx from "clsx"
import ProjectElement from "./projectElement"
import { FaMinus, FaPlusCircle } from "react-icons/fa"
import { AiFillPlusCircle } from "react-icons/ai"
import { BsPlus } from "react-icons/bs"
import { useState } from "react"
interface ProjectGridProps {
    items: {
        title: string
        description: string
        image: string
        href: string
        tools?: string
        place?: string[]
    }[]
    short?: boolean
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
    items,
    short
}) => {
    const [all, setAll] = useState(true);


    return (
        <div>

            {all ?
                (
                    <div>
                        <div className={clsx('grid gap-4',
                            short && `lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`,
                            !short && `sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`
                        )}
                        >
                            {items.slice(0,6).map((item, key) => (
                                <ProjectElement key={key} title={item.title} description={item.description} image={item.image} href={item.href} tools={item.tools} place={item.place} />
                            ))}
                        </div>
                        {items.length > 6 && (
                            <button onClick={() => setAll(false)} className="w-full flex flex-row justify-center align-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                                <BsPlus className="text-2xl mr-2" />
                                <div>
                                    See all
                                </div>
                            </button>
                        )}
                    </div>
                )
                :
                <div>
                    <div className={clsx('grid gap-4',
                        short && `lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`,
                        !short && `sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`
                    )}
                    >
                        {items.map((item, key) => (
                            <ProjectElement key={key} title={item.title} description={item.description} image={item.image} href={item.href} tools={item.tools} place={item.place} />
                        ))}
                    </div>
                    <button onClick={() => setAll(true)} className="w-full flex flex-row justify-center align-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                        <FaMinus className="text-md mr-2" />
                        <div>
                            Close
                        </div>
                    </button>

                </div>
            }
        </div>
    )
}

export default ProjectGrid;