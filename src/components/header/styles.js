import styled, { keyframes } from "styled-components";
import BgHero from '../../assets/bg-hero.png';

const zoomIn = keyframes`
    0% {
        transform: scale(0);
    }
   
    100% {
        transform: scale(1);
        
    }
`;
const floating = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0);
    }
`;

const HeaderStyles = styled.header`
width: 100%;
height: 100vh;
display: flex;
margin: 0 auto;
background: url(${BgHero}) no-repeat bottom center; 
background-size: cover;
    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 128rem; 
        position: relative;
        .header {  
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.6rem;
            font-weight: bolder;
            color: #ffffff; 
            .logo {
                width: 15rem;
                transition: transform 0.3s ease-in-out;
                    &:hover {
                        cursor: pointer;
                        transform: scale(1.05);
                    }
            }

            h1 {
                transition: all 0.3s ease-in-out;
                &:hover {
                    cursor: pointer;
                    transform: scale(0.95);
                    color: #019D08;
                }
            }

            .logoWind {
                width: 15rem;
                transition: transform 0.3s ease-in-out;
                    &:hover {
                        cursor: pointer;
                        transform: scale(1.05);
                    }
            }
        }
        .img-hero {
            position: absolute;
            right: 0;
            left: 0;
            margin: 0 auto;
            animation: ${zoomIn} 7s ease-in-out, ${floating} 7s ease-in-out infinite;
           
        }

        .arrowDown {
            width: 5rem;
            position: absolute;
            bottom: 2rem;
            right: 0;
            left: 0;
            margin: 0 auto;
            filter: drop-shadow( 0px 0px 10px  #ffffff);
            animation: ${floating} 1.5s ease-in-out infinite;
            rotate: 180deg;
            cursor: pointer;
        }

    }
`;




export default HeaderStyles;