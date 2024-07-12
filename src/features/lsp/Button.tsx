import React from "react";

interface BaseButtonProps {
    type: "primary" | "secondar" | "ghost" | "outlined";
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
}

const BUTTON_POSSIBLE_TYPES = ["primary", "secondar", "ghost", "outlined"] as const;
export const BaseButton: React.FC<BaseButtonProps> = ({type, onClick, label}) =>{
    if(!BUTTON_POSSIBLE_TYPES.includes(type)){
        return <div>Button type not supported</div>
    }

    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}