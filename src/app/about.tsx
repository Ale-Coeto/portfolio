import IconGrid from "./components/About/IconGrid";
import Title from "./components/Title";
import usePLanguages from "./hooks/usePLanguages";
import useTechnologies from "./hooks/useTechnologies";

const About = () => {
    const pLanguages = usePLanguages();
    const technologies = useTechnologies();

    return (
        <div id="about" >
            <Title number="01." title="About me" />

            <div className="flex flex-row justify-between gap-20 mb-16 max-md:flex-col">
                <p className="basis-4/6">
                    I am Alejandra Coeto, student of Computer Science and Technology at Tecnológico de Monterrey.
                    I am also a Software Developer in the robotics team Roborregos, the vicepresident of the student group
                    Women in Technology and a mentor of the FIRST robotics team Voltec 6647. I love to face new challenges and look forward to sharing my passion for robotics and
                    programming with the rest of the community.
                </p>

                <div className="font-nunito font-light max-md:hidden ">
                    <h2 className="font-bold text-xl">Languages Spoken</h2>
                    <ul className="basis-1/3 inline-block right-0">
                        <li className="right-0 pr-0"> Spanish <span > Native </span>  </li>
                        <li className="right-0 pr-0"> English  <span > Advanced (B2) </span> </li>
                        <li className="right-0 pr-0"> German <span > Intermediate (B1)</span>  </li>
                    </ul>
                </div>
            </div>

            <IconGrid title="Programming Languages" items={pLanguages} />
            <IconGrid title="Technologies" items={technologies} />



        </div>

    )
}

export default About;