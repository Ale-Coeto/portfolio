const intro = () => {
    return (
        <div id="home" className=" m-0 md:h-[88vh] max-md:py-48 flex flex-col justify-center">
            <div className="">
                <div>
                    Hi, I&apos;m
                </div>

                <div className="text-4xl sm:text-6xl font-poppins my-4">
                    Alejandra Coeto
                </div>

                <div className="pt-2 text-lg sm:text-2xl font-fira-code text-custom-text-dark-gray mb-8" >
                    &#60;Software Developer /&#62;
                </div>
                <a href="/pdfs/Resume.pdf" target="_blank">
                    <button className=" bg-sky-500 rounded-full px-4 py-1 text-xl font-nunito text-custom-dark-gray font-semibold">
                        Resume
                    </button>
                </a>
                <div className="lg:visible invisible absolute bottom-0 w-1 2xl:right-36 xl:w-2 h-1/3 right-32 rounded-full bg-gradient-to-b from-custom-green to-sky-400 " />
                <div className="lg:visible invisible absolute bottom-0 w-1 2xl:right-52 xl:w-2 h-1/4 right-44 rounded-full bg-gradient-to-b from-custom-green to-sky-400 " />
            </div>

        </div>
    )
}

export default intro;