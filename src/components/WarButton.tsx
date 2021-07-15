import React from 'react';
import styled from '@emotion/styled';

const Button = ({ buttonContent }) => {
    const clickHandler = (clickEvent) => {
        const target = clickEvent.event.target;

        console.log(target);
    };

    return (<button onClick={clickHandler}>{buttonContent}</button>);
};

const StyledButton = styled(Button)`
    padding: 10px;
    background: #66bb6a;
    color: #fff;
`;

export default StyledButton;