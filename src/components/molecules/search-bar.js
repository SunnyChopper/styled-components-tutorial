import React from 'react';
import styled from 'styled-components';

// Atoms
import Button from '../atoms/button';
import Input from '../atoms/input';

const SearchBarContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
`;

const SearchBar = (props) => {

    return (
        <SearchBarContainer>
            <Input />
            <Button hasBackground={props.buttonBackground} />
        </SearchBarContainer>
    );

};

export default SearchBar;