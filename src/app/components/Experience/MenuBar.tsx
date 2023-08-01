import MenuElement from "./MenuElement";
import InfoDisplay from "./InfoDisplay";
import { useState } from "react";

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
    const [selected, setSelected] = useState(0);
    const handleSelect = (key: number) => {
        setSelected(key);
    }

    return (
        <div className=" p-0 flex flex-row m-0 gap-40 pt-2 right-0 left-0 ">
            <div className=" flex flex-col justify-start whitespace-nowrap left-0 mt-4" >
                {items.map((item, key) => (
                    <div onClick={() => handleSelect(key)}>
                        <MenuElement title={item.title} selected={key == selected} />
                    </div>
                ))}
            </div>

            <InfoDisplay item={items[selected]} />
        </div>
    )
}

export default MenuBar;