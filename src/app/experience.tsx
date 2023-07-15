'use client'
import { useState } from "react";
import InfoDisplay from "./components/Experience/InfoDisplay";
import MenuBar from "./components/Experience/MenuBar";
import Title from "./components/Title";
import useExperiences from "./hooks/useExperiences";

const Experience = () => {
    const [index, setIndex] = useState(() => {
        return 0;
    });

    const experience = useExperiences();
    return (
        <div id="experience">
            <Title number="02." title="Experience" />
            <div
                className="
                    p-0
                    flex
                    flex-row
                    m-0
                    gap-40
                    right-0
                    left-0
                    pt-2
                "
            >
                <MenuBar items={experience}/>
                <InfoDisplay items={experience} />
            </div> {/* Main div */}
        </div>
    );
}

export default Experience;