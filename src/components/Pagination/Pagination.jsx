const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const postsNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    postsNumber.push(i);
  }

  // const number = postsNumber.map((number) => {
  //   return number;
  // });

  // console.log(number);

  return (
    <ul className="pagination">
      {postsNumber.map((number) => (
        <li className="page-item" key={number}>
          <a href="!#" className="page-link" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
