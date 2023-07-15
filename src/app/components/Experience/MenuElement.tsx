interface InfoDisplayProps {
    title: string
}

const MenuBar: React.FC<InfoDisplayProps> = ({ title }) => {
    return (
        <div
            className="
                border-l-2
                pl-4
                py-2
                border-custom-light-gray
            "
        >
            {title}
        </div>
    )
}

export default MenuBar;