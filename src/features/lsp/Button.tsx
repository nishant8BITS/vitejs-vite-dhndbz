import React from "react";

interface BaseButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    style?: Record<string, string>
}

export const BaseButton: React.FC<BaseButtonProps> = ({onClick, label, style}) =>{
    return (
        <button onClick={onClick} style={style}>
            {label}
        </button>
    )
}


export const PrimaryButton: React.FC<BaseButtonProps> = ({label, onClick}) =>{
    return (
        <BaseButton label={label} onClick={onClick} style={{
            backgroundColor: 'black'
        }} />
    )
}

export const SecondaryButton: React.FC<BaseButtonProps> = ({ label, onClick}) => {
    return (
        <BaseButton label={label} onClick={onClick} style={{
            backgroundColore: 'gray'
        }} />
    )
}


