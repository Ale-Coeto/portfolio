import Image from 'next/image';
import RoundedIcon from '../RoundedIcon';


interface TechElementProps {
    icon: string
    name: string
    time: string
    level: number
    size?: string
}
const TechElement: React.FC<TechElementProps> = ({
    icon,
    name,
    time,
    level,
    size,
}) => {
    return (
        <div className="flex flex-row gap-2 items-center m-2 bg-custom-light-gray shadow-md p-2 pr-3 rounded-full">
            <RoundedIcon icon={icon} size={size} />
            <div className='font-nunito text-sm font-semibold'> {/* Added a larger font size */}
                {name}
            </div>
        </div>
    )
}

export default TechElement;