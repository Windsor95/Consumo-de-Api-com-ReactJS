
import searchIcon from '../../assets/search-icon.svg'
import { HeaderStyles } from './styles'

import PropTypes from 'prop-types'

 function HeaderSection({ qtd }) {
    return (
     
       <HeaderStyles>
                <ul>
                    <li>Characters</li>
                    <li>Episodes</li>
                    <li>Locations</li>
                </ul>
                <div className='search'>
                <img className='search-icon' src={searchIcon} alt="" />
                    <input type="text" placeholder="Search..." />  
                </div>
                <p>Characters: {qtd}</p>
        </HeaderStyles>
       
    )
}
export default HeaderSection

HeaderSection.propTypes = {
    qtd: PropTypes.number
}

