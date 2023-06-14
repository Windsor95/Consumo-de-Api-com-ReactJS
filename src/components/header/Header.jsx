import  HeaderStyles  from "./styles";
import LogoRaM from '../../assets/logo-rick-and-morty.svg';
import LogoWind from '../../assets/logo-windsor.svg';
import ImgHero from '../../assets/img-hero.svg';
import arrowUp from '../../assets/arrow-up-icon.svg'

export function Header() {    
    return (
        <>
            <HeaderStyles>
            <div className="container">
                <header className="header">
                    <img className="logo" src={LogoRaM} alt="" />   
                    <h1>[ WIKI ]</h1>
                    <img className="logoWind" src={LogoWind} alt="" />
                </header>
                <img className="img-hero" src={ImgHero} alt="" />
                <img className='arrowDown' src={arrowUp} alt="" />
            </div>
            </HeaderStyles>
        </>
    )
}


