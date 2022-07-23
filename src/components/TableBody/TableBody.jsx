import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../store/actions/getPosts";

const TableBody = ({ postsFilter }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <tbody>
      {postsFilter &&
        postsFilter.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
