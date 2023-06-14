import Styled from 'styled-components';

const StyledCards = Styled.div`
    width: 100%;
    max-width: 20rem;
    height: 25rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.5rem;
    background: linear-gradient(167.21deg, #FFFFFF 6.1%, #019D08 90.75%);
    border-radius: 2.7rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.05);
        transform: rotate(-5deg);
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
    }
    .box-img{
        position: absolute;
        top: 1.2rem;
        width: 17.5rem;
        height: 16.8rem;
        border-radius: 3rem 3rem 0 0; 
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .box-name {
        position: absolute;
        bottom: 4rem;
        width: 100%;
        max-width: 17rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        h3{
            font-size: 1.25rem;
            font-weight: 700;
            color: #FFFFFF;
        }

        p{
            position: absolute;
            bottom: 3.5rem;
            right: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 6rem;
            height: 1.5rem;
            font-size: 1.2rem;
            font-weight: 700;
            text-align: center;
            color: #FFFFFF;
            background: #019D08;
            padding: 0.05rem 1rem;
            border-radius: 2rem;
        }
    }

    .box-status{
        position: absolute;
        bottom: 1.5rem;
        width: 100%;
        max-width: 17rem;
        display: flex;
        justify-content: space-between;

        h3{
            width: 8rem;
            font-weight: 800;
            font-size: 1rem;
            line-height: 1.6rem;
            text-align: center;
            color: #019D08;
            background: #FFFFFF;
            padding: 0.05rem 1rem;
            border-radius: 2rem;

            
        }
    }
`;

export default StyledCards