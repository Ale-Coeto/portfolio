interface EventProps {
    title: string;
    description: string;
    date: string;
    image: string;
    href: string;
    places?: string[];
}

const JourneyEvent = ({ title, description, date, image, href, places }: EventProps) => {

    return (
        <div className="flex flex-row ">

            <div className=" flex flex-row gap-6 justify-left items-center pl-28 relative">

                <div className="font-fira-code text-sm text-custom-text-dark-gray absolute -translate-x-28 ">
                    {date}
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <div className="h-20 border-l w-0 border-custom-text-gray" />
                    <div className={`border h-4 w-4 border-white rounded-full  ${places ? 'bg-sky-500' : 'bg-custom-green'}`} />
                    <div className="h-20 border-l w-0 border-custom-text-gray" />
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <div className="">
                        <img className="h-20 hover:h-40 transition-all duration-200" src={image} />
                    </div>
                    <div className="pr-28">
                        <div className="font-semibold">
                            {title}
                        </div>

                        <div>
                            {description}
                        </div>
                        {places && (
                            <div>
                                {places.map((place, key) => (
                                    <div key={key}>
                                        {place}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>




                </div>
            </div>

            {/* <div className="mt-2 p-4 h-52 translate-x-32 -translate-y-20 bg-gray-200 text-gray-800 rounded shadow hidden peer-hover:block absolute">
                <img className="h-52" src={image} />
            </div> */}
        </div>
    )
}

export default JourneyEvent;