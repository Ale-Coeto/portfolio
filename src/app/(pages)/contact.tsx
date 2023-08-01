import Tag from "../components/Contact/Tag";
import Title from "../components/Title";
import { BsEnvelope, BsGithub, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
    return (
        <div id="contact">
            <Title number="04." title="Contact" />

            <div className="justify-items-center text-center">
                <Tag name="alecoeto@hotmail.com" icon={BsEnvelope} />
                <Tag name="alecocoeto" icon={BsLinkedin} href="https://www.linkedin.com/in/alecoeto/" />
                <Tag name="Ale-Coeto" icon={BsGithub} href="https://github.com/Ale-Coeto" />
            </div>
        </div>
    )
}

export default Contact;