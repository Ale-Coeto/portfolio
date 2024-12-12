import Subtitle from "../Subtitle";
import IconElement from "./IconElement";
import TechElement from "./TechElement";

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
            <div className={`flex flex-wrap `} >
                {items.map((item, key) => (
                    size ? (
                        <TechElement
                            key={key}
                            name={item.name}
                            icon={item.icon}
                            time={item.time}
                            level={item.level}
                            size={size}
                        />
                    ) : (
                        <IconElement
                            key={key}
                            name={item.name}
                            icon={item.icon}
                            time={item.time}
                            level={item.level}
                            size={size}
                        />
                    )
                ))}

            </div>
        </div>
    )
}

export default IconGrid;