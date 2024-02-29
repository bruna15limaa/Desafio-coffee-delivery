import React, { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps{
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
    return (
        <InfoWithIconContainer>

        <IconContainer iconBg={icon}>
            {icon}
        </IconContainer>
        {typeof text === 'string' ? <p>{text}</p> : text}
        </InfoWithIconContainer>
    )
}
