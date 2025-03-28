import JourneyEvent from "@/app/components/Journey/Event"
import useJourney from "@/app/hooks/useJourney"
import EndLines from "@/app/components/Journey/EndLines"
import Title from "../components/Title"


const Journey = () => {
    const journey = useJourney();

    return (

        <div id="journey">
            <Title number="04." title="My Journey" />

            <div className="invisible md:visible absolute bg-custom-light-gray p-2 rounded-md text-sm">
                <LegendItem label="Competitions" color="bg-sky-500" />
                <LegendItem label="Events" color="bg-custom-green" />
            </div>

            <div className="md:translate-x-1/4 md:w-4/5 flex flex-col justify-start  h-[70vh] overflow-y-scroll">
                <EndLines top={true} />
                {journey.map((event, key) => (
                    <JourneyEvent key={key} title={event.title} description={event.description} date={event.date} image={event.image} href={event.href} places={event.place} />
                ))}
                <EndLines />
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