import {FieldError, FieldErrors} from "react-hook-form/dist/types/errors";
import {IAuthFrom} from "../../../models";

export interface IInputProps {
    type: InputType,
    placeholder: string,
    value?: string,
    updateValue?: (value: string) => void,
    errors?: FieldError,
}
type InputType = "text" | "password"
