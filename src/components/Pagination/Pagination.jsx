import { Link } from "react-router-dom";
import "./pagination.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const postsNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    postsNumber.push(i);
  }

  return (
    <ul className="pagination">
      {postsNumber.map((number) => (
        <Link
          key={number}
          to={number}
          className="pagination__link"
          onClick={() => paginate(number)}
        >
          {number}
        </Link>
      ))}
    </ul>
  );
};

export default Pagination;
