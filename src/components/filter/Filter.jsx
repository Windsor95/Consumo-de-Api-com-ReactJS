import StyledFilter from './styles';

export default function Filter() {
    return (
        <StyledFilter>
            <h2>Filters</h2>
            <div className="filters">
                <h3>Status</h3>
                <ul className="status">
                    <li>Alive</li>
                    <li>Dead</li>
                    <li>Unknown</li>
                </ul>
                <h3>Species</h3>
                <ul className="species">
                    <li>Human</li>
                    <li>Alien</li>
                    <li>Humanoid</li>
                    <li>Poopybutthole</li>
                    <li>Mythological</li>
                    <li>Animal</li>
                    <li>Disease</li>
                    <li>Robot</li>
                    <li>Cronenberg</li>
                    <li>Planet</li>
                    <li>Unknown</li>
                </ul>
                <h3>Gender</h3>
                <ul className="species">
                    <li>Male</li>
                    <li>Female</li>
                    <li>Genderless</li>
                    <li>Unknown</li>
                </ul>
            </div>
        </StyledFilter>
    )
}