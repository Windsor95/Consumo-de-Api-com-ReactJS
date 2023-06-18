import FooterStyle from './styles';

import LogoFooter from '../../assets/logo-rick-and-morty.svg';
import arrowMore from '../../assets/arrow-icon-more.svg';
import arrowUp from '../../assets/arrow-up-icon.svg';

import PropTypes from 'prop-types';

export default function Footer({ handleNext, handlePrev, countPages, page, clearSearch }) {
  return (
    <FooterStyle>
        <img className='logoFooter' src={LogoFooter} alt='' />
            
                <div className='boxBtn'>
                    {page !== 1 && (
                      <button className='arrowPrev' onClick={handlePrev}>
                          <img src={arrowMore} alt='' />  
                          prev  
                      </button>
                    )}
                    {page !== countPages && (
                      <button onClick={handleNext}>
                          Next
                          <img src={arrowMore} alt='' />
                      </button> 
                    )}
                   
                </div>   
           
        <img onClick={clearSearch} className='arrowUp' title='Up' src={arrowUp} alt='' />
    </FooterStyle>
  );
}

Footer.propTypes = {
  handleNext: PropTypes.func.isRequired,
  countPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  clearSearch: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};