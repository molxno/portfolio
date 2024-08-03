import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Define the types for the props
interface ButtonProps {
    primary?: boolean;
    big?: boolean;
    dark?: boolean;
    fontBig?: boolean;
}

export const Button = styled(Link)<ButtonProps>`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#b71b25' : '#df2935')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#000')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-weight: bold;

    &:hover {
        background: ${({primary}) => (primary ? '#df2935' : '#b71b25')};
        color: ${({dark}) => (dark ? '#d9dcd9' : '#fff')};
    }
`;
