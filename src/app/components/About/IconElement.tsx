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
        <div
            className="
                bg-custom-light-gray
                p-2
                rounded-xl
                m-1.5
            "
        >
            <RoundedIcon icon={icon} />
            <div className='inline-block align-top'>
                <div className='font-nunito'>
                    {name}
                </div>
                <div
                    className="
                        text-custom-text-gray
                        font-fira-code
                        text-sm
                        m-0
                        pb-4
                    "
                >
                    {time}
                </div>
            </div>
        </div>
    )
}

export default IconElement;