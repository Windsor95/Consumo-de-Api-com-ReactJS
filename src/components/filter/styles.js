import Styled from 'styled-components';

 const StyledFilter = Styled.div`
    width: 19.7rem;
    height: 75rem;
    margin-top: 2.5rem;
   
        h2 {
            font-size: 2.4rem;
            font-weight: 800;
            text-transform: uppercase;
            color: #ffffff;
            text-align: center;
        }

   .filters 
   {
    height: 70rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 2.5rem;
    text-align: center;
    h3 {
        font-size: 2rem;
        font-weight: 800;
        color: #019D08;
        &:not(:first-child) {
            padding-top: 1rem;
        }
    }
    ul {
        &:not(:last-child) {
            padding-bottom: 1rem;
            border-bottom: 1px solid #1A1D55
        }
        
        li {
            list-style: none;
            font-size: 1.3rem;
            font-weight: 800;
            line-height: 1.6rem;
            cursor: pointer;
            color: #ffffff;
            background-color: #1A1D55;
            border-radius: 5rem;
            margin-bottom: 1rem;
            width: 12rem;
            height: 2rem;
            padding: 0.1rem;
            transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
                &:hover {
                    background: #019D08;
                    
                }
            
        }
    }
   }
`;

export default StyledFilter