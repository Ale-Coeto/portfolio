
interface SubtitleProps {
    title: string,
    header?: string
}

const Subtitle: React.FC<SubtitleProps> = ({ title, header }) => {
    return (
        <div
            id={header}
            className="
            
            text-white
            font-poppins
            relative
            text-2xl
            z-1
            underline
            decoration-custom-green
            underline-offset-4
            decoration-2
            my-8
            "
        >
            {title}
        </div>
    )
}

export default Subtitle;