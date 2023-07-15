
interface SubtitleProps {
    title: string
}

const Subtitle: React.FC<SubtitleProps> = ({ title }) => {
    return (
        <div
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