import useRoutes from "@/app/hooks/useSections";
import NavElement from "./NavElement";
import { BsHouse } from "react-icons/bs";

const DesktopBar = () => {
    const routes = useRoutes();

    return (
        <div
            className="
                fixed
                lg:z-10
                lg:w-full
                lg:top-0
                lg:pt-1
                lg:h-16
                lg:bg-custom-light-gray

                
            "
        >
            <nav
                className="
                    flex
                    justify-between
                    flex-row
                    mt-4
                    mx-8
                    text-white
                "
            >
                <a href="#">
                    <BsHouse />
                </a>

                <div
                    className="
                        flex
                        flex-row
                        justify-between
                        space-x-8
                    "
                >
                    {routes.map((item) => (
                        <NavElement
                            num={item.num}
                            label={item.label}
                            href={item.href}
                        />
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default DesktopBar;