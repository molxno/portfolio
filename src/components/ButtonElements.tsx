import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Define the types for the props
interface ButtonProps {
    primary?: boolean;
    big?: boolean;
    dark?: boolean;
    fontBig?: boolean;
}

const buttonStyles = `
    border-radius: 50px;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;

export const Button = styled(Link)<ButtonProps>`
    ${buttonStyles}
    background: ${({primary}) => (primary ? '#b71b25' : '#df2935')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#000')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${({primary}) => (primary ? '#df2935' : '#b71b25')};
        color: ${({dark}) => (dark ? '#d9dcd9' : '#fff')};
    }
`;

export const DownloadButton = styled.a<ButtonProps>`
    ${buttonStyles}
    background: ${({primary}) => (primary ? '#b71b25' : '#df2935')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#000')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${({primary}) => (primary ? '#df2935' : '#b71b25')};
        color: ${({dark}) => (dark ? '#d9dcd9' : '#fff')};
    }

    &:focus-visible {
        outline: 2px solid #df2935;
        outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;
