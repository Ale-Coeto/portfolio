import clsx from "clsx"
import RoundedIcon from "../RoundedIcon"

interface InfoDisplayProps {
    title: string,
    selected?: boolean
    color: string
    icon: string
    id?: number
}

const MenuBar: React.FC<InfoDisplayProps> = ({ title, selected, color, icon }) => {

    return (
        <div className={clsx(`
       flex flex-row items-center gap-3 w-full md:pr-8  border-l-2 pl-4 py-2  hover:bg-custom-light-gray mr-10 transition-all duration-300 ease-in-out `,
            selected ? 'border-custom-green bg-blue' : 'border-custom-light-gray'
        )} >
            {/* <RoundedIcon icon={icon} color={color} size="xs" /> */}
            <div>
                {title}
            </div>
        </div>
    )
}

export default MenuBar;