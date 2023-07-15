import clsx from "clsx";
import { IconType } from "react-icons";

interface TagProps {
    icon: IconType,
    name: string,
    href?: string
}
const Tag: React.FC<TagProps> = ({
    icon: Icon,
    name,
    href
}) => {
    return (
        <div className={clsx(`
            flex align-middle justify-center
        `,
            href && 'hover:underline'
        )}

        >

            <Icon className="self-center mr-2 text-sky-400" />
            <a href={href}>
                {name}
            </a>
        </div>
    )
}

export default Tag;