import Styled from 'styled-components'

const FooterStyle = Styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
    margin-top: 5rem;

    .logoFooter {
        transition: transform 0.3s ease-in-out;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }

    button {
        display: flex;  
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 4rem;
        font-weight: 800;
        color: #019D08;
        padding: 1rem 2rem;
        border-radius: 5rem;
        text-transform: uppercase;
        transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
        &:hover {
            background: #019D08;
            color: #fff;  
            transform: scale(0.95);
            opacity: 0.5;
            img {
                transform: rotate(360deg);
            }

        }

        img {
            width: 5rem;
            margin-left: 2rem;
            transition: transform 0.3s ease-in-out;
        }

    }
    .arrowUp {
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
            transform: translateY(-0.5rem);
            
        }
    }
`;

export default FooterStyle