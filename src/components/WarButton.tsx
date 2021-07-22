import React from 'react';
import styled from '@emotion/styled';

const Button = ({ children }) => {
    const clickHandler = (clickEvent) => {
        const target = clickEvent.event.target;

        console.log(target);
    };

    return (<StyledButton onClick={clickHandler}>{children}</StyledButton>);
};

const StyledButton = styled.button`
    padding: 10px;
    background: #66bb6a;
    color: #fff;
`;

export default Button;