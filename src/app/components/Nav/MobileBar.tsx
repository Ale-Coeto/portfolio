'use client'
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import useRoutes from "@/app/hooks/useSections";
import NavElement from "./NavElement";
import clsx from "clsx";
import { IoIosArrowUp } from "react-icons/io";

const MobileBar = () => {
    const [open, setOpen] = useState(false);
    const routes = useRoutes();

    return (
        <div className="visible sm:invisible">
            <div className="w-full z-50 bg-custom-dark-gray fixed p-4 text-white text-2xl" onClick={() => setOpen(!open)}>
                <FiMenu />
                {open && (
                    <div className="flex flex-col items-center py-4 px-5 bg-custom-dark-gray w-full">
                        {routes.map((item, key) => (
                            <NavElement key={key} mobile label={item.label} num={item.num} href={item.href} />
                        ))}
                    </div>
                )}
            </div>
            <div className="fixed bg-custom-light-gray rounded-full z-50 text-2xl text-gray-200 p-2 bottom-4 right-4 drop-shadow-xl">
                <a href="#">
                    <IoIosArrowUp />
                </a>
            </div>
        </div>
    )
}

export default MobileBar;