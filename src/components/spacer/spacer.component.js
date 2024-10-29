
import styled, {useTheme} from "styled-components/native";
import React from "react";
const sizesVariant={
    small:1,
    medium:2,
    large:3,
}

const positionVariant= {
    top:'marginTop',
    left:'marginLeft',
    right:'marginRight',
    bottom:'marginBottom',
};

const SpacerView=styled.View`
${({variant})=>variant}
`;

const getVariant=(position,size, theme)=>{
    const sizeIndex= sizesVariant[size];
    const property=positionVariant[position]
    const value =theme.space[sizeIndex]
    return `${property}:${value}`} 



export const Spacer =({position,size,children})=>{
const theme =useTheme();
const variant = getVariant(position,size,theme);
return (
    <SpacerView variant={variant}>
        {children}
    </SpacerView>
)
};
Spacer.defaultProps={
    position :'top',
    size:'small'
}