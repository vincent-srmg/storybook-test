import React from 'react'

export interface socialButtonProps {
    tw?: string;
    label?: string;
    icon?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export const SocialButton = ({ tw, label, disabled, icon, onClick }: socialButtonProps) => {
    return (
        <button className={tw} disabled={disabled}>
            {icon && (
                <span className={`icon ${icon}`}></span>
            )}
            {label}
        </button>
    )
}

export default SocialButton