
export type meroButtonProps = {
    className? : string;
    type?: "submit"| "button" | "reset" | "menu";
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    variant?: "outlined" | "contained" | "normal"| "link";
    color?: "warning"| "primary" | "secondary" | "black" | "success" | "error" ;
    disabled?: boolean;
    size? : "xs"| "sm" |"md" | "lg"
    fullWidth?: boolean;
    disableElevation? : boolean;

}


declare const Button: meroButtonProps;


export default Button;
