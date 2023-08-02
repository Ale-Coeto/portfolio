import Image from 'next/image';
import RoundedIcon from '../RoundedIcon';


interface IconElementProps {
    icon: string
    name: string
    time: string
    level: number
}
const IconElement: React.FC<IconElementProps> = ({
    icon,
    name,
    time,
    level
}) => {
    return (
        <div className="flex flex-row align-center bg-custom-light-gray p-2 rounded-xl m-1.5 items-center">
            <RoundedIcon icon={icon} />
            <div className='flex flex-col justify-between'>
                    <div className='font-nunito'>
                        {name}
                    </div>
                    <div className="text-custom-text-gray font-fira-code text-sm m-0">
                        {time}
                    </div>
            </div>
        </div>
    )
}

export default IconElement;