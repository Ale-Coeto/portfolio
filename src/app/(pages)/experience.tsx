'use client'

import MenuBar from "../components/Experience/MenuBar";
import Title from "../components/Title";
import useExperiences from "../hooks/useExperiences";

const Experience = () => {
    const experience = useExperiences();
    return (
        <div id="experience">
            <Title number="02." title="Experience" />
            <div>
                <MenuBar items={experience} />
            </div> 
        </div>
    );
}

export default Experience;