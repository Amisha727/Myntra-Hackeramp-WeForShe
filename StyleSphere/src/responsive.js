// src/responsive.js
export const mobile = (props) => {
    return `@media only screen and (max-width: 380px) {
    ${props}
    }`;
};
