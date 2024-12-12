import Title from "../components/Title";
import useProjects from "../hooks/useProjects";
import ProjectGrid from "../components/Projects/projectGrid";
import Subtitle from "../components/Subtitle";
import useCompetitions from "../hooks/useCompetitions";
import useResearch from "../hooks/useResearch";

const Projects = () => {
    const projects = useProjects();
    const competitions = useCompetitions();
    const research = useResearch();

    return (
        <div id="projects">
            <Title number="03." title="Projects" />

            {/* <Subtitle title="Projects" header="projects" /> */}
            <ProjectGrid items={projects} show_categories header="projects" />

            {/* <Subtitle title="Competitions" header="competitions"/>
            <ProjectGrid items={competitions} header="competitions" />

            <Subtitle title="Research projects" header="research"/>
            <ProjectGrid items={research} short={true} header="research" /> */}

        </div>
    )
}

export default Projects;