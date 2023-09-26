import clsx from 'clsx';
import Image from 'next/image';

interface RoundedIconProps {
    icon: string
    color?: string
    size?: string
}

const RoundedIcon: React.FC<RoundedIconProps> = ({ icon, color, size }) => {
    return (
        <div
            className={clsx(` relative  inline-block  rounded-full  overflow-hidden  border-2 border-solid border-gray-100`,
                color == 'blue' && 'bg-blue-900',
                color == 'black' && 'bg-gray-900',
                !color && 'bg-gray-200',
                size == 'xl' ? 'h-16 w-16 p-0' : "h-14 w-14 mr-4",
            )}
        >
            <Image className={clsx('object-cover',
                size == 'xl' ?  'scale-90' : "scale-100"
            )} fill src={icon} referrerPolicy="no-referrer" alt="Image" />
        </div>
    )
}

export default RoundedIcon;