import useRoutes from "@/app/hooks/useSections";
import NavElement from "./NavElement";
import { BsGithub } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import Tag from "../Contact/Tag";

const DesktopBar = () => {
    const routes = useRoutes();

    return (
        <div className="invisible  sm:visible">
            <div className="fixed border-b z-50 w-full top-0 pt-1 h-16  drop-shadow-sm opacity-[0.97] backdrop-blur-lg" >
                <nav className="flex justify-between flex-row mt-4 mx-8 text-white">
                    <a href="#">
                        <div className="rounded-md px-2 text-xl font-mono text-sky-500 ">
                            ACS
                        </div>
                    </a>

                    <div className=" flex flex-row justify-between space-x-8">
                        {routes.map((item, key) => (
                            <NavElement key={key} num={item.num} label={item.label} href={item.href} />
                        ))}
                    </div>
                </nav>

            </div>
            <div className=" fixed bottom-0 w-1 2xl:right-30 lg:right-20 lg:visible invisible xl:w-2 h-1/2 rounded-full bg-gradient-to-b from-custom-green to-sky-400 " />
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