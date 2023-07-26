import { twMerge } from 'tailwind-merge'

export interface TagsProps {
    tw?: string;
    twSize?: string;
    twSelected?: string;
    twDisabled?: string;
    label?: string;
    closeIcon?: string;
    disabled?: boolean;
    selected?: boolean;
    onClick?: () => void;
}

export const Tags = ({ tw, twSize, twSelected, label, closeIcon, twDisabled, disabled, selected, onClick }: TagsProps) => {
    return (
        <button className={twMerge(tw, twSize, selected && twSelected, disabled && twDisabled)} onClick={onClick} disabled={disabled}>
            {label}
            {selected && <span className={closeIcon}></span>}
        </button>
    )
}

export default Tags