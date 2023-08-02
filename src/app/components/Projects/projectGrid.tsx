import clsx from "clsx"
import ProjectElement from "./projectElement"

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
    return (
        <div className={clsx('grid gap-4' ,
              short && `lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`,
              !short && `sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3`
            )}
        >
            {items.map((item, key) => (
                <ProjectElement key={key} title={item.title} description={item.description} image={item.image} href={item.href} tools={item.tools} place={item.place}/>
            ))}
        </div>
    )
}

export default ProjectGrid;