import React, { useState } from 'react';
import searchIcon from '../../assets/search-icon.svg'
import { HeaderStyles } from './styles'

import PropTypes from 'prop-types'

 function HeaderSection({ qtd, setSearch }) {

    const [selectCharacter, setSelectCharacter] = useState('')

    const handleSelectCharacter = (item) => {
        setSelectCharacter(item)
    }
    
    return (
     
       <HeaderStyles>
                <ul>
                    <li 
                        onClick={() => handleSelectCharacter('characters')}
                        className={ selectCharacter === 'characters' ? 'active' : ''}
                    >
                    Characters 
                    </li>
                    <li
                        onClick={() => handleSelectCharacter('episodes')}
                        className={ selectCharacter === 'episodes' ? 'active' : ''}
                    >Episodes</li>
                    <li
                        onClick={() => handleSelectCharacter('locations')}
                        className={ selectCharacter === 'locations' ? 'active' : ''}
                    >Locations</li>
                </ul>
                <div className='search'>
                    <img className='search-icon' src={searchIcon} alt="" />
                    <input 
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" placeholder="Search..." 
                     />  
                </div>
           
                <p>Characters: {qtd}</p>
        </HeaderStyles>
       
    )
}
export default HeaderSection

HeaderSection.propTypes = {
    qtd: PropTypes.number,
    setSearch: PropTypes.func
}

