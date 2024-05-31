import RoundedIcon from "../RoundedIcon";
import Subtitle from "../Subtitle";
import ImageView from "./ImageView";

interface InfoDisplayProps {
    item: {
        title: string
        position: string
        date: string
        info: string
        images: string[]
        bullets: string[]
        icon: string
        iconColor: string
    }
}
const infoDisplay: React.FC<InfoDisplayProps> = ({
    item
}) => {
    return (
        <div className="w-full">
            <div className="flex flex-row align-center mb-8 justify-between max-xl:flex-col max-xl:mb-0 ">
                <div className="flex flex-row gap-3">
                    <div className="self-center mr-2">
                        <RoundedIcon icon={item.icon} color={item.iconColor} size="xl" />
                    </div>
                    <div className="mt-[-35px]">
                        <Subtitle title={item.title} />
                        <div className="self-center mt-[-25px] font-mono font-light text-custom-text-gray text-base">
                            {item.position}
                        </div>
                    </div>
                </div>


                <div className=" text-custom-text-gray font-fira-code text-lg mb-4 pb-4 max-lg:mt-4" >
                    {item.date}
                </div>
            </div>

            <div className="mb-4">
                {item.info}
            </div>

            <ul className="pl-4 mb-8 marker:text-sky-400">
                {item.bullets.map((bullet, key) => (
                    <li key={key}className="list-disc">
                        {bullet}
                    </li>
                ))}
            </ul>
            {item.images.map((image, key) => (
                image && <ImageView key={key} image={image} />
            ))}

        </div>
    )
}

export default infoDisplay;