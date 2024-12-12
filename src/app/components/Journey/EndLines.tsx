
const EndLines = ({ top }: { top?: boolean }) => {
    return (
        <div className="md:pl-28">
            <div className="flex flex-col items-center w-4">
                {!top && (
                    <div className="h-20 border-l w-0 border-custom-text-gray" />
                )}
                <div className="border h-2 w-2 border-white rounded-full bg-white" />
                {top && (
                    <div className="h-20 border-l w-0 border-custom-text-gray" />
                )}
            </div>
        </div>
    )
}

export default EndLines;