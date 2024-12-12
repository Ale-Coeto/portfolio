import Footer from "@/app/components/Contact/Footer"
import JourneyEvent from "@/app/components/Journey/Event"
import useJourney from "@/app/hooks/useJourney"
import EndLines from "@/app/components/Journey/EndLines"
import Title from "../components/Title"


const Journey = () => {
    const journey = useJourney();

    return (

        <div id="journey">
            <Title number="04." title="Journey" />

            <div className="absolute bg-custom-light-gray p-2 rounded-md text-sm">

                <LegendItem label="Competitions" color="bg-sky-500" />
                <LegendItem label="Events" color="bg-custom-green" />


            </div>

            <div className="translate-x-1/4 flex flex-col justify-start  h-[70vh] overflow-scroll">
                <EndLines top={true} />
                {journey.map((event, key) => (
                    <JourneyEvent title={event.title} description={event.description} date={event.date} image={event.image} href={event.href} places={event.place} />
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