'use client'
import MenuElement from "./MenuElement";
import InfoDisplay from "./InfoDisplay";
import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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
        setOpen(false);
    }

    return (
        <motion.div
            className="p-0 flex md:flex-row flex-col m-0 pt-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="flex flex-col md:hidden mb-6">
                <button
                    onClick={() => setOpen(o => !o)}
                    className="flex flex-row items-center justify-between border-2 border-custom-light-gray rounded-md p-3 text-left w-full"
                >
                    <span>{items[selected].title}</span>
                    <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <IoMdArrowDropdownCircle className="text-sky-500 text-2xl" />
                    </motion.span>
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                        >
                            <div className="flex flex-col mt-1 border border-custom-light-gray rounded-md overflow-hidden">
                                {items.map((item, key) => (
                                    <motion.div
                                        key={key}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: key * 0.05, ease: "easeOut" }}
                                        onClick={() => handleSelect(key)}
                                    >
                                        <MenuElement
                                            title={item.title}
                                            selected={key === selected}
                                            color={item.iconColor}
                                            icon={item.icon}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="hidden md:flex flex-col justify-start whitespace-nowrap mb-2 mt-4 mr-20">
                {items.map((item, key) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: key * 0.07, ease: "easeOut" }}
                        onClick={() => handleSelect(key)}
                    >
                        <MenuElement
                            title={item.title}
                            selected={key === selected}
                            color={item.iconColor}
                            icon={item.icon}
                        />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selected}
                    className="w-full"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                    <InfoDisplay item={items[selected]} />
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default MenuBar;
