import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import  SideBar from './components/SideBar';
import Posts from './components/Posts';
import Pagination from './components/Pagination';



const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
    
  }, []);
  
  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // change view 1
  const changeView1 = (toggle) => {
    setToggle(false);
    
  }

  // change view 2
  const changeView2 = (toggle) => {
    setToggle(true);
  }
  console.log(toggle);
  
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col left">
          {/* sidebar */}
          <SideBar toggle={toggle} changeView1={changeView1} changeView2={changeView2}/>
          </div>

          <div className="col right">
          {/* main page */}
          <h2>News Feed</h2>
          <Posts posts={currentPosts} loading={loading} toggle={toggle}/>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </div>
        </div>
      </div>
    
  );
}

export default App;
