import RoundedIcon from "../RoundedIcon";
import Subtitle from "../Subtitle";
import ImageView from "./ImageView";

interface InfoDisplayProps {
    items: {
        title: string
        position: string
        date: string
        info: string
        images: string[]
        bullets: string[]
        icon: string
        iconColor: string
    }[]
}
const infoDisplay: React.FC<InfoDisplayProps> = ({
    items
}) => {
    return (
        <div>
            <div className="flex flex-row align-center mb-8 justify-between max-xl:flex-col max-xl:mb-0">
                <div className="flex flex-row">
                    <div className="self-center mr-2">
                        <RoundedIcon icon={items[0].icon} color="black" size="xl" />
                    </div>
                    <div className="mt-[-35px]">
                        <Subtitle title={items[0].title} />
                        <div className="self-center mt-[-25px] font-mono">
                            {items[0].position}
                        </div>
                    </div>
                </div>


                <div
                    className="
                    text-custom-text-gray
                    font-fira-code
                    text-lg
                    mb-4
                    pb-4
                    max-lg:mt-4
                    
                "
                >
                    {items[0].date}
                </div>
            </div>

            <div className="mb-4">
                {items[0].info}
            </div>

            <ul className="pl-4 mb-8 marker:text-sky-400">
                {items[0].bullets.map((bullet) => (
                    <li className="list-disc">
                        {bullet}
                    </li>
                ))}
            </ul>
            {items[0].images.map((image) => (
                image && <ImageView image={image} />
            ))}

        </div>
    )
}

export default infoDisplay;