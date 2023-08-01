'use client'
import { useState } from "react";
import InfoDisplay from "../components/Experience/InfoDisplay";
import MenuBar from "../components/Experience/MenuBar";
import Title from "../components/Title";
import useExperiences from "../hooks/useExperiences";

const Experience = () => {
    const [index, setIndex] = useState();

    const experience = useExperiences();
    return (
        <div id="experience">
            <Title number="02." title="Experience" />
            <div
                >
                <MenuBar items={experience} />
                
            </div> {/* Main div */}
        </div>
    );
}

export default Experience;