'use client'

import MenuBar from "../components/Experience/MenuBar";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import useExperiences from "../hooks/useExperiences";

const Experience = () => {
    const experience = useExperiences();

    return (
        <div id="experience">
            <Title number="02." title="Experience" />
            <div>
                <Subtitle title="Work experience" />
                <MenuBar items={experience.work} />
            </div>
            <div>
                <Subtitle title="Leadership" />
                <MenuBar items={experience.leadership} />
            </div>
        </div>
    );
}

export default Experience;