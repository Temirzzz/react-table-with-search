import { useState } from "react";
import { useSelector } from "react-redux";
import TableHead from "./components/TableHead/TableHead";
import TableBody from "./components/TableBody/TableBody";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const posts = useSelector((state) => state.posts.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const postsPerPage = 10;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const postsFilter = currentPost.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const getSearchValue = (data) => {
    setSearchValue(data);
  };

  const sortPosts = () => {
    const sortedData = postsFilter.concat().sort((a, b) => {
      return a > b ? 1 : -1;
    });
  };

  return (
    <div className="App">
      <SearchFilter getSearchValue={getSearchValue} />
      <table className="table">
        <TableHead sortPosts={sortPosts} />
        <TableBody postsFilter={postsFilter} />
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
