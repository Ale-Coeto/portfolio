import { BsGithub, BsLinkedin } from "react-icons/bs";
import Tag from "../components/Contact/Tag";
import { FaEnvelope } from "react-icons/fa";

const intro = () => {
    return (
        <div id="home" className=" m-0 md:h-[88vh] max-md:py-48 flex flex-col justify-center">
            <div className="">
                <div>
                    Hi, I&apos;m
                </div>

                <div className="text-4xl sm:text-5xl font-poppins my-4">
                    Alejandra Coeto
                </div>

                <div className="pt-2 text-lg sm:text-xl font-fira-code text-custom-text-dark-gray mb-8" >
                    &#60;Software Developer /&#62;
                </div>
                <div className="flex flex-row items-center gap-3">
                    <a href="/pdfs/Resume.pdf" target="_blank">
                        <button className=" bg-sky-500 rounded-full px-4 py-1 text-base font-nunito text-custom-dark-gray font-semibold">
                            Resume
                        </button>

                    </a>
                    <div className="text-xl flex gap-3 ">
                        <Tag name="Ale-Coeto" icon={BsGithub} href="https://github.com/Ale-Coeto" />
                        <Tag name="alecocoeto" icon={BsLinkedin} href="https://www.linkedin.com/in/alecoeto/" />
                        <Tag name="alecoeto@hotmail.com" icon={FaEnvelope} href="mailto:alecoetos@gmail.com?subject=Contact portfolio&body=Contacting you through your portfolio" />
                    </div>
                </div>
                <div className="lg:visible invisible absolute bottom-0 w-1 2xl:right-36 xl:w-2 h-1/3 right-32 rounded-full bg-gradient-to-b from-custom-green to-sky-400 " />
                <div className="lg:visible invisible absolute bottom-0 w-1 2xl:right-52 xl:w-2 h-1/4 right-44 rounded-full bg-gradient-to-b from-custom-green to-sky-400 " />
            </div>

        </div>
    )
}

export default intro;