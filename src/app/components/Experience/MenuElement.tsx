import clsx from "clsx"
import { useEffect, useState } from "react";

interface InfoDisplayProps {
    title: string,
    selected?: boolean
}

const MenuBar: React.FC<InfoDisplayProps> = ({ title, selected }) => {
    

    return (
        <div  className={clsx(`
        border-l-2 pl-4 py-2 border-custom-light-gray hover:bg-custom-light-gray`,
            selected && 'border-custom-green'
        )} >
            {title}
        </div>
    )
}

export default MenuBar;