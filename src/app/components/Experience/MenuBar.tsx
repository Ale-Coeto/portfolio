import useExperiences from "@/app/hooks/useExperiences";
import MenuElement from "./MenuElement";

interface MenuBarProps {
    items: {
        title: string
        position: string
        date: string
        info: string
        bullets: string[]
        images: string[]
        icon: string
        iconColor: string
    }[]
}

const MenuBar: React.FC<MenuBarProps> = ({ items }) => {

    return (
        <div
            className="
                flex
                flex-col
                justify-start
                whitespace-nowrap
                left-0
                mt-4
            "
        >
            {items.map((item) => (
                <MenuElement title={item.title} />
            ))}
        </div>
    )
}

export default MenuBar;