const intro = () => {
    return (
        <div id="home" className="
        m-0
        md:h-[88vh]     
        max-md:py-48  
        flex
        flex-col
        justify-center
        ">
            <div className="">
                <div>

                    Hi, I'm
                </div>

                <div
                    className="text-6xl font-poppins my-4"
                >
                    Alejandra Coeto
                </div>

                <div
                    className="pt-2 text-2xl font-fira-code text-custom-text-dark-gray mb-8"
                >
                    &#60;Software Developer /&#62;
                </div>
                <button className=" bg-sky-500 rounded-md px-2 text-xl font-nunito text-custom-dark-gray font-semibold">
                    Resume
                </button>
            </div>

        </div>
    )
}

export default intro;