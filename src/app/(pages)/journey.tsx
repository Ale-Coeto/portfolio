import JourneyEvent from "@/app/components/Journey/Event"
import useJourney from "@/app/hooks/useJourney"
import EndLines from "@/app/components/Journey/EndLines"
import Title from "../components/Title"
import TimelineEvent from "../components/Journey/TimelineEvent"
import Timeline from "../components/Journey/Timeline"
import React, { useRef } from "react";
import GoToContactButton from "../components/Journey/GoToContactButton"

const Journey = () => {

    return (

        <div id="journey" className="flex flex-col">
            <div className="sticky top-20 z-50">
                <Title number="04." title="My Journey" />
                <div className="invisible md:visible absolute bg-custom-light-gray p-2 rounded-md text-sm">
                    <LegendItem label="Competition" color="bg-sky-500" />
                    <LegendItem label="Event" color="bg-custom-green" />
                </div>
            </div>

            <Timeline />
            <div className="sticky bottom-10 flex flex-row justify-center md:justify-end items-center z-50">
                <GoToContactButton />
            </div>

        </div>

    )
}

const LegendItem = ({ label, color }: { label: string, color: string }) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${color}`} />
            <div> {label} </div>
        </div>
    )
}

export default Journey;