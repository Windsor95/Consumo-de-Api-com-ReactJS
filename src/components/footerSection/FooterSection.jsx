import FooterStyle from './styles';

import LogoFooter from '../../assets/logo-rick-and-morty.svg';
import arrowMore from '../../assets/arrow-icon-more.svg';
import arrowUp from '../../assets/arrow-up-icon.svg';

import PropTypes from 'prop-types';

export default function Footer({ handleMore, countPages, page }) {
  return (
    <FooterStyle>
      <img className='logoFooter' src={LogoFooter} alt='' />
      {!(page === countPages) && (
        <button onClick={handleMore}>
          More
          <img src={arrowMore} alt='' />
        </button>
      )}
      <img className='arrowUp' title='Up' src={arrowUp} alt='' />
    </FooterStyle>
  );
}

Footer.propTypes = {
  handleMore: PropTypes.func.isRequired,
  countPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};