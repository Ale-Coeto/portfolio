import clsx from "clsx";
import { RxTriangleRight } from "react-icons/rx";

interface ProjectFooterProps {
    tools?: string,
    place?: string[],
}

const ProjectFooter: React.FC<ProjectFooterProps> = ({ tools, place }) => {
    return (
        <div>
            <div className={clsx(place && 'pt-2')}>
                {place?.map((place, key) => (
                    <div key={key} className=" flex flex-row items-center mr-2 font-fira-code text-gray-400 text-base">
                        <RxTriangleRight />
                        {place}
                    </div>
                ))}
            </div>

            <div className={clsx(tools && 'pt-3', "block font-fira-code text-custom-text-dark-gray text-sm")} >
                {tools}
            </div>

        </div>
    )
};

export default ProjectFooter;