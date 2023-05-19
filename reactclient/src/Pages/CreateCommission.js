import React, { useState } from "react";
import Constants from "../Utilities/Constants";
import LagInnlegg from "./LagInnlegg";
import OppdaterInnlegg from "./OppdaterInnlegg";
import "../Utilities/MPStyle.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Markedsplass() {
  const [posts, setPosts] = useState({});
  const [showingCreateNewPostForm, setShowingCreateNewPostForm] = useState(true);
  const [postCurrentlyBeingUpdated, setPostCurrentlyBeingUpdated] = useState(null);

  function getPosts() {
    const url = Constants.API_URL_GET_ALL_POSTS;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((postsFromServer) => {
        setPosts(postsFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  function deletePost(postId) {
    const url = `${Constants.API_URL_DELETE_POST_BY_ID}/${postId}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((responseFromServer) => {
        console.log(responseFromServer);
        onPostDeleted(postId);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  return (
    <div className="InnleggContainer">
      <div className="">
        <div className="">
          {(showingCreateNewPostForm === false && postCurrentlyBeingUpdated === null) && (
            <div>
              <header>
                <Link to="/">
                <motion.div 
                className='header-container'>
                    <h1 className='header-title'>
                            Nettside AS
                    </h1>
                </motion.div>
                </Link>
            </header>

              <div className="knappene">
                {/* <button onClick={getPosts} className="btn btn-dark btn-lg w-100">
                  See all commissions
                </button> */}
                {/* <button
                  onClick={() => setShowingCreateNewPostForm(true)}
                  className="btn btn-secondary btn-lg w-100 mt-4"
                >
                  Create commission
                </button> */}
                <motion.a
                        initial={{
                            color:"white",
                            backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)",
                        }}
                        transition={{
                            type:"spring",
                            stiffness:87,
                            damping:15.5,
                        }}
                        
                        whileHover={{
                            //scale:1.02,
                            borderRadius:"100px",
                            backgroundImage: "linear-gradient(130deg, #fff, #fff)",
                            color:"#e91779"
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                        
                        onClick={getPosts}
                        className="button button1" >
                            See all commissions
                    </motion.a>
                    <motion.a
                        initial={{
                            color:"white",
                            backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)",
                        }}
                        transition={{
                            type:"spring",
                            stiffness:87,
                            damping:15.5,
                        }}
                        
                        whileHover={{
                            //scale:1.02,
                            borderRadius:"100px",
                            backgroundImage: "linear-gradient(130deg, #fff, #fff)",
                            color:"#e91779"
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                        
                        onClick={() => setShowingCreateNewPostForm(true)}
                        className="button button2" >
                            Create commission
                    </motion.a>
              </div>
            </div>
          )}

          {(posts.length > 0 && showingCreateNewPostForm === false && postCurrentlyBeingUpdated === null) && renderPostsTable()}

          {showingCreateNewPostForm && <LagInnlegg onPostCreated={onPostCreated} />}

          {postCurrentlyBeingUpdated !== null && <OppdaterInnlegg post={postCurrentlyBeingUpdated} onPostUpdated={onPostUpdated} />}
        </div>
      </div>
    </div>
  );

  function renderPostsTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-white">
          <thead className="text-white">
            <tr>
              <th scope="col">PostId (PK)</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">CRUD Operations</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {posts.map((post) => (
              <tr key={post.postId}>
                <th scope="row">{post.postId}</th>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <button onClick={() => setPostCurrentlyBeingUpdated(post)} className="btn btn-dark btn-lg mx-3 my-3">Oppdater</button>
                  <button onClick={() => { if (window.confirm(`Er du sikker på at du ønsker å slette innlegget "${post.title}"?`)) deletePost(post.postId) }} className="btn btn-secondary btn-lg mx-3">Slett</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={() => setPosts([])} className="btn btn-dark btn-lg w-100">Tøm innlegg array</button>
      </div>
    );
  }

  function onPostCreated(createdPost) {
    setShowingCreateNewPostForm(false);

    if (createdPost === null) {
      return;
    }

    alert(`Innlegget er opprettet. "${createdPost.title}" ligger nå på markedsplassen.`);

    getPosts();
  }

  function onPostUpdated(updatedPost) {
    setPostCurrentlyBeingUpdated(null);

    if (updatedPost === null) {
      return;
    }

    let postsCopy = [...posts];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === updatedPost.postId) {
        return true;
      }
      return false;
    });

    if (index !== -1) {
      postsCopy[index] = updatedPost;
    }

    setPosts(postsCopy);

    alert(`Innlegget er oppdatert. "${updatedPost.title}" er nå oppdatert på markedsplassen`);
  }

  function onPostDeleted(deletedPostPostId) {
    let postsCopy = [...posts];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === deletedPostPostId) {
        return true;
      }
      return false;
    });

    if (index !== -1) {
      postsCopy.splice(index, 1);
    }

    setPosts(postsCopy);

    alert(`Innlegget er slettet.`);
  }
}
