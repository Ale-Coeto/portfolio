"use client";

import { IoIosArrowDown } from "react-icons/io";

interface GoToContactButtonProps {
    atBottom: boolean;
    onBackToTop?: () => void;
}

const GoToContactButton = ({ atBottom, onBackToTop }: GoToContactButtonProps) => {
    const handleClick = () => {
        if (atBottom) {
            onBackToTop?.();
            window.location.href = "/#journey";
        } else {
            window.location.href = "/#contact";
        }
    };

    return (
        <button
            onClick={handleClick}
            className="flex flex-row items-center gap-2 self-center mt-8 px-4 py-2 bg-custom-light-gray text-white rounded-lg hover:bg-custom-dark-green transition"
        >
            {atBottom
                ? <IoIosArrowDown className="rotate-180" />
                : <IoIosArrowDown />
            }
            <div>{atBottom ? "Back to top" : "Skip to Contact"}</div>
        </button>
    );
};

export default GoToContactButton;
