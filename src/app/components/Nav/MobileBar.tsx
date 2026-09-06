'use client'
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import useRoutes from "@/app/hooks/useSections";
import NavElement from "./NavElement";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

const MobileBar = () => {
    const [open, setOpen] = useState(false);
    const routes = useRoutes();

    return (
        <div className="visible sm:invisible">
            <div
                className="fixed w-full z-50 top-0"
                style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            >
                <div className="flex justify-between items-center px-5 py-3 bg-[#1c1e24]/95 border-b border-white/10">
                    <a href="#">
                        <Image src="/logo2.png" alt="Logo" width={34} height={34} className="rounded-full" />
                    </a>
                    <button
                        onClick={() => setOpen(o => !o)}
                        className="relative text-white text-2xl w-8 h-8 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <FiMenu className={`absolute transition-all duration-200 ${open ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
                        <FiX className={`absolute transition-all duration-200 ${open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`} />
                    </button>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-[#2b313a]/90 border-b border-white/10 flex flex-col py-1 text-white">
                        {routes.map((item, key) => (
                            <div
                                key={key}
                                onClick={() => setOpen(false)}
                                className="px-6 py-3 border-b border-white/5 last:border-b-0 hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer"
                            >
                                <NavElement mobile label={item.label} num={item.num} href={item.href} />
                            </div>
                        ))}
                    </div>
                </div>
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
