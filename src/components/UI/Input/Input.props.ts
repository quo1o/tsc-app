export interface IInputProps {
    type: InputType,
    placeholder: string,
    value?: string,
    updateValue?: (value: string) => void,
}
type InputType = "text" | "password"
