import CustomImg from "../../UI/CustomImg";
import imgSrc from "../../assets/images/search_glass.png";
import "./searchFilter.scss";

const SearchFilter = ({ getSearchValue }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск"
        className="form-control"
        onChange={(e) => getSearchValue(e.target.value)}
      />
      <CustomImg
        sposition="absolute"
        stop="50%"
        stranslateY="-50%"
        sright="12px"
        swidth="15px"
        src={imgSrc}
        alt="search"
      />
    </div>
  );
};

export default SearchFilter;
