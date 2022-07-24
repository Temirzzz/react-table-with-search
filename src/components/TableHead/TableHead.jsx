import { useRef } from "react";
import CustomImg from "../../UI/CustomImg";
import imgSrc from "../../assets/images/arrow.png";
import "./tableHead.scss";

const TableHead = ({ sortPosts }) => {
  const idRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();

  const changeArrowDirection = (refData) => {
    refData.lastChild.classList.toggle("revert");
  };

  return (
    <thead className="table__head thead-dark">
      <tr>
        <th
          className="table__head-item_first"
          ref={idRef}
          onClick={() => [sortPosts("id"), changeArrowDirection(idRef.current)]}
        >
          ID{" "}
          <CustomImg
            swidth="11px"
            sheight="6px"
            smarginLeft="40px"
            src={imgSrc}
            alt="arrow"
          />
        </th>
        <th
          className="table__head-item_second"
          ref={titleRef}
          onClick={() => [
            sortPosts("title"),
            changeArrowDirection(titleRef.current),
          ]}
        >
          Заголовок{" "}
          <CustomImg
            swidth="11px"
            sheight="6px"
            smarginLeft="40px"
            src={imgSrc}
            alt="arrow"
          />
        </th>
        <th
          className="table__head-item_third"
          ref={bodyRef}
          onClick={() => [
            sortPosts("body"),
            changeArrowDirection(bodyRef.current),
          ]}
        >
          Описание{" "}
          <CustomImg
            swidth="11px"
            sheight="6px"
            smarginLeft="40px"
            src={imgSrc}
            alt="arrow"
          />
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
