import { BsGithub, BsLinkedin } from "react-icons/bs"
import Tag from "./Tag"
import { FaEnvelope } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between text-left mt-8">
            <div className="text-xl flex gap-3 ">
                <Tag name="Ale-Coeto" icon={BsGithub} href="https://github.com/Ale-Coeto" />
                <Tag name="alecocoeto" icon={BsLinkedin} href="https://www.linkedin.com/in/alecoeto/" />
                <Tag name="alecoeto@hotmail.com" icon={FaEnvelope} href="mailto:alecoetos@gmail.com?subject=Contact portfolio&body=Contacting you through your portfolio" />
            </div>
            <div className="mt-5" />
            <p className="text-sm">
                Last update: Mar 16, 2025
            </p>
        </div>
    )
}

export default Footer;