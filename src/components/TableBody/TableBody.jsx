import "./tableBody.scss";

const TableBody = ({ postsFilter }) => {
  return (
    <tbody className="table__body">
      {postsFilter &&
        postsFilter.map((post) => (
          <tr key={post.id}>
            <td className="table__body-item_align">{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
