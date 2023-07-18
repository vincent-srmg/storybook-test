import clsx from "clsx";
import { twMerge } from 'tailwind-merge'

export interface ButtonProps {
    tw?: string;
    label?: string;
    iconLeft?: string;
    iconRight?: string;
    twSize?: string;
    disabled?: boolean;
    children?: JSX.Element | JSX.Element[];
    onClick?: () => void;
}

export const Button = ({ tw, label, iconLeft, iconRight, disabled, twSize, children, onClick }: ButtonProps) => {
    const styles = clsx(tw, twSize);
    return (
        <button className={styles} onClick={onClick} disabled={disabled}>
            {iconLeft && (
                <span className={`icon ${iconLeft}`}></span>
            )}
            {label}{children}
            {iconRight && (
                <span className={`icon ${iconRight}`}></span>
            )}
        </button>
    )
}

export default Button