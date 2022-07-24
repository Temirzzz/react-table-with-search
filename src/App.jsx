import { useEffect, useState } from "react";
import TableHead from "./components/TableHead/TableHead";
import TableBody from "./components/TableBody/TableBody";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import Pagination from "./components/Pagination/Pagination";
import Loader from "./components/Loader/Loading";
import axios from "axios";
import "./app.scss";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [revers, setRevers] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const postsPerPage = 10;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setPosts(res.data);
      setIsLoading(false);
    });
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const postsFilter = currentPost.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.body.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const getSearchValue = (data) => {
    setSearchValue(data);
  };

  const sortPosts = (field) => {
    const sortedData = posts.concat().sort((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });

    setRevers(!revers);
    if (revers === false) {
      sortedData.reverse();
    }
    setPosts(sortedData);
    return sortedData;
  };

  return (
    <div className="app">
      <div className="app__content">
        <SearchFilter getSearchValue={getSearchValue} />
        {isLoading ? (
          <Loader />
        ) : (
          <table className="table  table-bordered">
            <TableHead sortPosts={sortPosts} />
            <TableBody postsFilter={postsFilter} />
          </table>
        )}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
