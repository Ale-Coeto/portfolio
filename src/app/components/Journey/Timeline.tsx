"use client";
import { useState } from "react";
import TimelineEvent from "./TimelineEvent";
import useJourney from "@/app/hooks/useJourney";
import EndLines from "./EndLines";

const Timeline = () => {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const journey = useJourney();

    return (
        <div className="relative flex flex-col items-center py-12">
            <div className="w-full max-w-2xl z-0">
                <EndLines top={true} />
                {journey.map((event, idx) => (
                    <div className="w-full flex flex-row items-center" key={idx}>
                        <TimelineEvent
                            key={idx}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                            image={event.image}
                            href={event.href}
                            places={event.place}
                            index={idx}
                            focusedIndex={focusedIndex}
                            setFocusedIndex={setFocusedIndex}
                        />
                    </div>
                ))}
                <EndLines />
            </div>
        </div>
    )
}

export default Timeline;