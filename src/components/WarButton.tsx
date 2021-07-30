import React from 'react';
import styled from '@emotion/styled';

import { BaseTheme } from '../theme/default';

export const Button = ({ children, onClick }) => {
    const clickHandler = (clickEvent) => {
        const target = clickEvent?.event?.target;
        console.log(target);
        onClick?.();
    };

    return (<StyledButton onClick={clickHandler}>{children}</StyledButton>);
};

const StyledButton = styled.button`
    padding: 10px;
    background: ${BaseTheme.colors.primary.main};
    color: ${BaseTheme.colors.greyscale.white};
`;
