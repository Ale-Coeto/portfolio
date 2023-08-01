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
            <Title number="03." title="Projects and Competitions" />

            <Subtitle title="Projects" />
            <ProjectGrid items={projects} />

            <Subtitle title="Competitions" />
            <ProjectGrid items={competitions} />

            <Subtitle title="Research projects" />
            <ProjectGrid items={research} short={true} />

        </div>
    )
}

export default Projects;