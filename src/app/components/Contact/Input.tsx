'use client';
import clsx from "clsx";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    errors?: any;
    disabled?: boolean;
    register: UseFormRegister<FieldValues>;
    required?: boolean;
    type?: string;
    textArea?: boolean;
    name?: string;
}

const Input: React.FC<InputProps> = ({ id, label, errors, disabled, name, textArea, register, required }) => {
    return (
        <div className="flex flex-col mx-0 mb-6 ">
            <label className="text-gray-100 mb-2 font-fira-code font-thin" htmlFor={id}>
                {label}
            </label>
            {textArea ? (
                <textarea id={id}  {...register(id, { required })} className="h-32 align-text-top font-nunito text-base text-gray-300 bg-custom-light-gray border-0 w-full m-0 ring-0 ring-inset bg-quaternary rounded-md p-1  outline-none focus:ring-1 focus:ring-custom-green" />
            ) : (
                <input id={id} {...register(id, { required })} className=" h-8 font-nunito text-base text-gray-300 bg-custom-light-gray border-0 w-full m-0 ring-0 ring-inset bg-quaternary rounded-md p-1  outline-none focus:ring-1 focus:ring-custom-green focus:bg-custom-light-gray" />
            )}


        </div>
    )
};

export default Input;