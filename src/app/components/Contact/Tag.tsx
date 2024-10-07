import clsx from "clsx";
import { IconType } from "react-icons";

interface TagProps {
    icon: IconType,
    name: string,
    href?: string,
    bar?: boolean
}
const Tag: React.FC<TagProps> = ({
    icon: Icon,
    name,
    href,
    bar
}) => {
    return (
        <div className={clsx(`
            flex align-middle items-center justify-center
            
        `,
            href && 'hover:underline'
        )}

        >
            <a href={href} target="_blank">
                <Icon className="self-center mr-2 text-sky-400 hover:text-sky-300" />
            </a>

            {bar && (
                <a href={href} target="_blank">
                    {name}
                </a>
            )}
        </div>
    )
}

export default Tag;