import clsx from "clsx";
import { RxTriangleRight } from "react-icons/rx";
import { tags } from '@/app/Utils/tags';

interface ProjectFooterProps {
    tools?: string,
    place?: string[],
    categories?: string[]
}



const ProjectFooter: React.FC<ProjectFooterProps> = ({ tools, place, categories }) => {


    return (
        <div>
            <div className={clsx(place && 'pt-2 ')}>
                {place?.map((place, key) => (
                    <div key={key} className=" flex flex-row items-center mr-2 font-fira-code text-gray-400 text-sm">
                        <RxTriangleRight />
                        {place}
                    </div>
                ))}
            </div>

            <div className={clsx(tools && 'pt-3 pb-3', "block font-fira-code text-custom-text-dark-gray text-xs")} >
                {tools}
            </div>


            {categories?.map((item, key) => (
                <div key={key} className={clsx('inline-block px-2 py-1 rounded-md mr-2 text-xs ', tags.get(item))}>
                    {item}
                </div>
            ))}

        </div>
    )
};

export default ProjectFooter;