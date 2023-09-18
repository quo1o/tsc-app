export interface IButtonProps{
    type?: ButtonType,
    title?: string,
    buttonClick?: () => void,
    buttonClass: ButtonClassType,
}

type ButtonClassType = "button__primary"
type ButtonType = "button" | "submit"

