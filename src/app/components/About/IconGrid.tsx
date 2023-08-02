import Subtitle from "../Subtitle";
import IconElement from "./IconElement";

interface IconGridProps {
    title: string,
    items: {
        name: string
        icon: string
        time: string
        level: number
    }[]

}
const IconGrid: React.FC<IconGridProps> = ({ title, items }) => {
    return (
        <div>
            <Subtitle title={title} />
            <div className=" grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5" >
                {items.map((item) => (
                    <IconElement
                        name={item.name}
                        icon={item.icon}
                        time={item.time}
                        level={item.level}
                    />
                ))}

            </div>
        </div>
    )
}

export default IconGrid;