
interface TitleProps {
    title: string,
    number: string
}

const Title: React.FC<TitleProps> = ({ title, number }) => {
    return (
        <div className="flex tracking-normal pb-0 my-10 z-50">
            <span className=" text-3xl text-custom-green mr-2 font-fira-code pt-0.5">
                {number}
            </span>
            <div
                className=" text-4xl font-poppins text-white leading-10 pb-0">
                {title}
            </div>
        </div>
    )
}

export default Title;