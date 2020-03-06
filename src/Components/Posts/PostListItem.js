import React, { useEffect } from "react";
import {
  deletePost,
  fetchAllPosts
} from "../../redux/actions/postsActions/postsActions";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
import { setCurrentUser } from "../../redux/actions/usersAuth/userAuthActions";

const PostListItem = (props) => {
  const { deletePost, token, fetchAllPosts, setCurrentUser } = props;
  const userToken = token && token.jwt;
  const { title, content, _id } = props.post;
  const { username } = token;

  useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);
  
  const handleDeletePost = async () => {
    await deletePost(_id, userToken);
    await fetchAllPosts();
  };
  console.log(props.token);
  return (
    <div>
      {props.token === null ? (
        <Loading />
      ) : (
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
          <h4>Author: {username}</h4>
          <button onClick={() => handleDeletePost(_id, userToken)}>
            Delete
          </button>
          <button>Edit</button>
        </div>
      )}
    </div>
  );
};

const actions = {
  deletePost,
  fetchAllPosts,
  setCurrentUser
};

const mapStateToProps = (state) => {
  return {
    token: state.user.currentUser
  };
};
export default connect(mapStateToProps, actions)(PostListItem);
