
import  Styled  from "styled-components";

export const HeaderStyles = Styled.header`
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;

            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                li {
                    width: 17rem;
                    list-style: none;
                    font-size: 1.6rem;
                    font-weight: 800;
                    text-align: center;
                    line-height: 2.9rem;
                    cursor: pointer;
                    background: #fff;
                    border-radius: 5rem;
                    padding: 0.01rem 2rem;
                    color: #019D08;
                    transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

                        &.active {
                            background: #019D08;
                            color: #fff;
                        }

                        &:hover {
                            background: #019D08;
                            color: #fff; 
                        }
                }

            }
            .search {
                position: relative;
                overflow: hidden;
                width: 67rem;   
                height: 5rem;
                border-radius: 5rem;

                    input {
                    width: 67rem;   
                    height: 5rem;
                    border-radius: 5rem;
                    padding: 2rem;
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #019D08;

                    &::placeholder {
                        opacity: 0.5;
                        color: #019D08;
                    }

                    }

                    

                .search-icon {
                    position: absolute;
                    right: 0rem;
                    top: 0rem;
                    bottom: 0rem;
                    margin: auto;
                    padding: 2rem 1.5rem;
                    font-size: 2rem;
                    cursor: pointer;
                    background: #019D08;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        transform: rotate(-15deg);
                        opacity: 0.9;
                        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                    }
                }

            }

            p {
                font-size: 1.6rem;
                font-weight: 800;
                transition: color 0.3s ease-in-out;
                &:hover {
                    color: #019D08; 
                }
            }
           
        
`;