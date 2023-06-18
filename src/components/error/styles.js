import Styled from 'styled-components';

const StyledFilter = Styled.div`
display: none;
position: fixed;
top: 0;
left: 0;
z-index: 999;
    width: 100vh;
    height: 100vh;
    margin-top: 2.5rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
 `;

export default StyledFilter