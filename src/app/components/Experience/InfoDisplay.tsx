"use client";

import { useState } from "react";
import RoundedIcon from "../RoundedIcon";
import Subtitle from "../Subtitle";
import ImageView from "./ImageView";
import { FaMinus } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";

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
const InfoDisplay: React.FC<InfoDisplayProps> = ({
    item
}) => {
    const [seeMore, setSeeMore] = useState<boolean>(false);

    return (
        <div className="w-full">
            <div className="flex flex-row align-center mb-8 justify-between max-xl:flex-col max-xl:mb-0 ">
                <div className="flex flex-row gap-3">
                    <div className="self-center mr-2">
                        <RoundedIcon icon={item.icon} color={item.iconColor} size="xl" />
                    </div>
                    <div className="mt-[-35px]">
                        <Subtitle title={item.title} noUnderline/>
                        <div className="self-center mt-[-25px] font-mono font-light text-custom-text-gray text-base">
                            {item.position}
                        </div>
                    </div>
                </div>


                <div className=" text-custom-text-gray text-sm font-fira-code mb-4 pb-4 max-lg:mt-4" >
                    {item.date}
                </div>
            </div>

            <div className="mb-1">
                {item.info}
            </div>
            {seeMore ? (
                <div>
                    <ul className="pl-4 mb-2 marker:text-sky-400">
                        {item.bullets.map((bullet, key) => (
                            <li key={key} className="list-disc">
                                {bullet}
                            </li>
                        ))}
                    </ul>
                    {item.images.map((image, key) => (
                        image && <ImageView key={key} image={image} />
                    ))}
                    <button onClick={() => setSeeMore(false)} className="w-full text-sm flex flex-row justify-center align-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                        <FaMinus className="text-md mr-2" />
                        hide
                    </button>
                </div>
            ) : (
                <button onClick={() => setSeeMore(true)} className="w-full flex text-sm flex-row justify-center align-center items-center underline pt-6 text-custom-text-dark-gray hover:text-custom-text-gray">
                    <BsPlus className="text-2xl mr-2" />
                    See more
                </button>
            )}

        </div>
    )
}

export default InfoDisplay;