import React from 'react';
import styled from 'styled-components';

const CustomInput = styled.input.attrs((props) => ({
    type: 'text'
}))`
    width: 100%;
    font-size: 16px;
    padding: 8px 12px;
`;

const Input = (props) => {

    return (
        <CustomInput />
    );

};

export default Input;