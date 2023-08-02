import clsx from "clsx"
import { useEffect, useState } from "react";

interface InfoDisplayProps {
    title: string,
    selected?: boolean
    id?: number
}

const MenuBar: React.FC<InfoDisplayProps> = ({ title, selected, id }) => {

    return (
        <div className={clsx(`
       w-full md:pr-8  border-l-2 pl-4 py-2  hover:bg-custom-light-gray mr-10`,
            selected ? 'border-custom-green bg-blue' : 'border-custom-light-gray'
        )} >
            {title}
        </div>
    )
}

export default MenuBar;