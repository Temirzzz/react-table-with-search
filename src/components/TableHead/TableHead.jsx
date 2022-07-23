const TableHead = ({ sortPosts }) => {
  return (
    <thead>
      <tr>
        <th onClick={() => sortPosts()}>id</th>
        <th onClick={() => sortPosts()}>Заголовок</th>
        <th onClick={() => sortPosts()}>Описание</th>
      </tr>
    </thead>
  );
};

export default TableHead;
