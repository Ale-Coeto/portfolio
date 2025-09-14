import Bio from "../components/About/Bio";
import IconGrid from "../components/About/IconGrid";
import Title from "../components/Title";
import usePLanguages from "../hooks/usePLanguages";
import useTechnologies from "../hooks/useTechnologies";

const About = () => {
    const pLanguages = usePLanguages();
    const technologies = useTechnologies();
    const highlightClass = "text-sky-400";

    return (
        <div id="about" >
            <Title number="01." title="About me" />
            {/* <motion.p
                className="leading-tight"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            > */}
            {/* I&apos;m a Computer Science and Technology student at <span className={highlightClass}>Tecnológico de Monterrey</span>.
            Through my journey, I&apos;ve gained valuable experience through internships at <span className={highlightClass}>Google</span>, <span className={highlightClass}>Microsoft</span>, and <span className={highlightClass}>Oracle</span>.
            I&apos;m also thankful to have served as president of the <span className={highlightClass}>Roborregos</span> robotics team, vice president of <span className={highlightClass}>Women in Technology</span>, and mentor for the FIRST robotics team <span className={highlightClass}>Voltec</span>.
            I love facing new challenges and sharing my passion for robotics and programming with the community. */}
            {/* </motion.p> */}
            <Bio />
            <IconGrid title="Programming Languages" items={pLanguages} />
            <IconGrid title="Technologies" items={technologies} size="sm" />

        </div>

    )
}

export default About;