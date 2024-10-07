import Subtitle from "../Subtitle";
import IconElement from "./IconElement";

interface IconGridProps {
    title: string,
    items: {
        name: string
        icon: string
        time: string
        level: number
    }[],
    size?: string

}
const IconGrid: React.FC<IconGridProps> = ({ title, items, size }) => {
    return (
        <div>
            <Subtitle title={title} />
            <div className=" grid px-8 md:px-12  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5" >
                {items.map((item, key) => (
                    <IconElement
                        key={key}
                        name={item.name}
                        icon={item.icon}
                        time={item.time}
                        level={item.level}
                        size={size}
                    />
                ))}

            </div>
        </div>
    )
}

export default IconGrid;