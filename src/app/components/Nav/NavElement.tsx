import clsx from "clsx"

interface NavElementProps {
    num: number
    label: string
    href: string
    mobile?: boolean
}

const NavElement: React.FC<NavElementProps> = ({ num, label, href, mobile }) => {

    return (
        <div className={clsx(mobile && 'text-xl font-light py-1 ', "hover:underline")}>
            <a href={href}>
                <span className="text-custom-green mr-1 hover:no-underline">
                    0{num}.
                </span>
                {label}
            </a>
        </div>
    )
}

export default NavElement;