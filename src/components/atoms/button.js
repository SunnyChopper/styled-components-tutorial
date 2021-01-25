import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
    background-color: ${props => props.hasbackground ? '#5746bb' : 'none'};
    color: white;
    border-radius: 6px;
    text-align: center;
    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.2);
    padding: 8px 24px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 900;

    &:hover {
        background-color: red;
    }
`;

const Button = (props) => {

    return (
        <CustomButton hasbackground={props.hasBackground}>Click Here</CustomButton>
    );

};

export default Button;