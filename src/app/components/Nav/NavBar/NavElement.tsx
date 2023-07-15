import { Link } from "react-scroll"

interface NavElementProps {
    num: number
    label: string
    href: string
}

const NavElement: React.FC<NavElementProps> = ({
    num,
    label,
    href
}) => {

    return (
        <div>
            {/* <Link to={label} smooth> */}
            <a href={href}>
                <span className="text-sky-400 mr-1">
                    0{num}.
                </span>
                {label}
            </a>
            {/* </Link> */}
        </div>
    )
}

export default NavElement;