import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../../redux/actions/postsActions/postsActions";
import Loading from "../Loading/Loading";
import PostListItem from "./PostListItem";
import SearchPost from "./SearchPost";
import { setCurrentUser } from "../../redux/actions/usersAuth/userAuthActions";

const PostLists = (props) => {
  const { posts, fetchAllPosts, setCurrentUser } = props;

  const fetchPost = async () => {
    return await fetchAllPosts();
  };

  useEffect(() => {
    setCurrentUser();
    fetchPost();
  }, []);

  return (
    <div>
      {posts.length <= 0 ? (
        <Loading />
      ) : (
        <div>
          <SearchPost />
          {posts &&
            posts.map((post) => (
              <div key={post.id}>
                <PostListItem post={post} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const actions = {
  fetchAllPosts,
  setCurrentUser
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, actions)(PostLists);
