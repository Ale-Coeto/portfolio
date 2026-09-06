import { motion } from "framer-motion";

interface EventProps {
    title: string;
    description: string;
    date: string;
    image?: string;
    href?: string;
    places?: string[];
    isFocused?: boolean;
}

const JourneyEvent = ({ title, description, date, image, href, places, isFocused }: EventProps) => {

    return (
        <div className="flex flex-row gap-4 md:gap-8 pl-16 md:pl-20 items-center h-36 w-full mr-4 md:mr-0">
            {image && (
                <div className="h-32 flex items-center justify-center">
                    <motion.img
                        src={image}
                        alt="Event"
                        className="h-full w-auto object-contain"
                        animate={{ scale: isFocused ? 1.4 : 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 14 }}
                    />
                </div>
            )}

            <div className="w-full flex flex-col">
                <div className="font-semibold underline decoration-sky-500 underline-offset-2 decoration-1">
                    {title}
                </div>

                <div className="pb-2 text-sm md:visible md:h-auto invisible h-0">
                    {description}
                </div>
                {places && (
                    <div className="flex flex-wrap gap-2">
                        {places.map((place, key) => (
                            <div className="bg-custom-light-gray px-2 py-1 text-xs rounded-xl" key={key}>
                                {place}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default JourneyEvent;