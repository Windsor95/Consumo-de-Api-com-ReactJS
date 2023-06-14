import Styled from "styled-components";
import BgList from "../../assets/bg-main.png";

export const SectionStyles = Styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    background: url(${BgList}) no-repeat bottom center; 
    background-size: cover;

    .container {
        width: 100%;
        max-width: 128rem;
        margin: 0 auto;
        padding: 3.8rem 2rem;

        .main {
            display: flex;
            justify-content: space-between;
            .cardsList {
                width: 100%;
                margin-top: 6.5rem;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(2, 1fr);
                grid-column-gap: px;
                grid-row-gap: 5rem;
                align-items: top;
                justify-items: right;
            }
                  
        }
        
    }
`;

 