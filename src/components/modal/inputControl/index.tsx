
import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyleFieldset } from "./style"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string;
    idName: string;
    error?:  string;
    register: UseFormRegisterReturn<string>;
    type: string;
  }

export const InputControl = forwardRef<HTMLInputElement, IInputProps> (({placeholder, type, idName, register, error }) => {
    return(
        <StyleFieldset >
            <input id={idName} required  type={type}  {...register} />
            <label htmlFor={idName}>{placeholder}</label>
            {error ? <span>{error}</span> : null}
        </StyleFieldset>
    )
})