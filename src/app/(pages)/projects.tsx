import Title from "../components/Title";
import useProjects from "../hooks/useProjects";
import ProjectGrid from "../components/Projects/projectGrid";

const Projects = () => {
    const projects = useProjects();

    return (
        <div id="projects">
            <Title number="03." title="Projects" />
            <ProjectGrid items={projects} show_categories header="projects" />

        </div>
    )
}

export default Projects;