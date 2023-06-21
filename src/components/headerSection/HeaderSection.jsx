import searchIcon from "../../assets/search-icon.svg";
import { HeaderStyles } from "./styles";
import headerImg from "../../assets/Rick-Morty.png";

import PropTypes from "prop-types";

function HeaderSection({ qtd, setSearch }) {
  return (
    <HeaderStyles>
      <img src={headerImg} alt="" />
      <div className="search">
        <img className="search-icon" src={searchIcon} alt="" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
        />
      </div>

      <p>Characters: {qtd}</p>
    </HeaderStyles>
  );
}
export default HeaderSection;

HeaderSection.propTypes = {
  qtd: PropTypes.number,
  setSearch: PropTypes.func,
};
