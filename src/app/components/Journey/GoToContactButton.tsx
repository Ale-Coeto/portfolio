"use client";

import { IoIosArrowDown } from "react-icons/io";

const GoToContactButton = () => {
    const goToContact = () => {
        window.location.href = "/#contact";
    }
    return (
        <button onClick={goToContact} className="flex flex-row items-center gap-2 self-center mt-8 px-4 py-2 bg-custom-light-gray text-white rounded-lg hover:bg-custom-dark-green transition">
            <IoIosArrowDown />
            <div>
                Skip to Contact
            </div>
        </button>
    )
}

export default GoToContactButton;