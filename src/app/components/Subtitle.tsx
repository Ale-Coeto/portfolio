
interface SubtitleProps {
    title: string,
    header?: string
    noUnderline?: boolean
}

const Subtitle: React.FC<SubtitleProps> = ({ title, header, noUnderline }) => {
    return (
        <div
            id={header}
            className={`
            text-white font-poppins relative text-2xl z-1 my-8
            ${!noUnderline && "underline decoration-custom-green underline-offset-4 decoration-2"}
            `}
        >
            {title}
        </div>
    )
}

export default Subtitle;