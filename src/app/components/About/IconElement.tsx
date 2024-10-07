import Image from 'next/image';
import RoundedIcon from '../RoundedIcon';


interface IconElementProps {
    icon: string
    name: string
    time: string
    level: number
    size?: string
}
const IconElement: React.FC<IconElementProps> = ({
    icon,
    name,
    time,
    level,
    size,
}) => {
    return (
        <div className="flex flex-row items-center bg-custom-light-gray p-2 rounded-xl m-2 shadow-md hover:shadow-lg transition-shadow duration-300">
            <RoundedIcon icon={icon} size={size} />
            <div className='flex flex-col ml-0 '> {/* Added margin-left for spacing */}
                <div className='font-nunito text-base font-semibold'> {/* Added a larger font size */}
                    {name}
                </div>
                {time && (
                    <div className="text-custom-text-gray font-fira-code text-sm"> {/* Added margin-top for spacing */}
                    {time}
                    </div>
                )}
               
            </div>
        </div>
    )
}

export default IconElement;