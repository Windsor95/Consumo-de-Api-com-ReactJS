import StyledCards from './styles';
import PropTypes from 'prop-types';

export default function Cards({ image, name, status, gender, species  }) {

   
    return (
        <StyledCards>
            <div className="box-img">
                <img src={image} alt="" />
                
            </div>
            <div className="box-name">
                <h3>{name === 'Hole in the Wall Where the Men Can See it All' ? 'Hole in the Wall' : name}</h3>
                <p>{status}</p>
            </div>
            <div className="box-status">
                <h3>{gender}</h3>
                <h3>{species === 'Mythological Creature' ? 'Mythological' : species}</h3>
            </div>
        </StyledCards>
    )
}

Cards.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    gender: PropTypes.string,
    species: PropTypes.string,
}

