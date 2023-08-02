import MenuElement from "./MenuElement";
import InfoDisplay from "./InfoDisplay";
import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import clsx from "clsx";

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
    const [open, setOpen] = useState(false);
    const handleSelect = (key: number) => {
        setSelected(key);
        setOpen(!open);
    }

    const handleOpen = () => {
        setOpen(!open);
        console.log(open);
    }

    return (
        <div className=" p-0 flex md:flex-row flex-col m-0 pt-2 right-0 left-0 ">
            <div onClick={handleOpen} className="visible md:invisible md:h-0 md:w-0 flex flex-row items-center border-2 justify-between rounded-md p-2">
                {items[selected].title}
                <IoMdArrowDropdownCircle className="ml-2 text-sky-500 text-2xl" />
            </div>


            <div className={clsx(open && 'invisible h-0 md:h-auto md:visible', "visible flex md:flex-col flex-col justify-start whitespace-nowrap md:mb-2 mb-8 left-0 mt-4 md:overflow-scroll md:mr-20")}>
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