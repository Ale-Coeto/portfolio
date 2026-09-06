'use client'
import { useState, useEffect } from 'react'
import useRoutes from "@/app/hooks/useSections";
import NavElement from "./NavElement";
import { BsGithub } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Tag from "../Contact/Tag";

const SCROLL_THRESHOLD = 80;

const DesktopBar = () => {
    const routes = useRoutes();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="invisible sm:visible">
            <div
                className="fixed top-0 left-0 right-0 z-50 flex justify-center"
                style={{
                    paddingTop: scrolled ? '12px' : '0',
                    paddingLeft: scrolled ? '20px' : '0',
                    paddingRight: scrolled ? '20px' : '0',
                    transition: 'padding 0.5s ease-in-out',
                }}
            >
                <div
                    style={{
                        transition: 'all 0.5s ease-in-out',
                        width: '100%',
                        maxWidth: scrolled ? '800px' : '100%',
                        borderRadius: scrolled ? '9999px' : '0px',
                        backgroundColor: scrolled
                            ? 'rgba(43, 49, 58, 0.6)'
                            : 'rgba(28, 30, 36, 0.97)',
                        backdropFilter: 'blur(28px)',
                        WebkitBackdropFilter: 'blur(28px)',
                        borderTop: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                        borderLeft: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                        borderRight: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: scrolled
                            ? '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)'
                            : 'none',
                        overflow: 'hidden',
                    }}
                >
                    <nav
                        className="flex justify-between flex-row text-white"
                        style={{
                            margin: scrolled ? '8px 24px' : '8px 32px',
                            transition: 'margin 0.5s ease-in-out',
                        }}
                    >
                        <a href="#" className="flex flex-row items-center">
                            <Image src="/logo2.png" alt="Logo" width={40} height={40} className="rounded-full" />
                        </a>
                        <div className="flex flex-row items-center space-x-8">
                            {routes.map((item, key) => (
                                <NavElement key={key} num={item.num} label={item.label} href={item.href} />
                            ))}
                        </div>
                    </nav>
                </div>
            </div>

            <div className="fixed bottom-0 w-1 2xl:right-30 lg:right-20 lg:visible invisible xl:w-2 h-1/2 rounded-full bg-gradient-to-b from-custom-green to-sky-400" />
            <div className="fixed bottom-1/3 pt-36 right-[-4rem] lg:visible invisible text-white font-fira-code rotate-90">
                <Tag name="Ale-Coeto" icon={BsGithub} href="https://github.com/Ale-Coeto" bar />
            </div>
            <div className="fixed bg-custom-light-gray rounded-full z-50 text-3xl text-gray-200 p-2 bottom-8 left-8 drop-shadow-xl">
                <a href="#">
                    <IoIosArrowUp />
                </a>
            </div>
        </div>
    )
}

export default DesktopBar;
