import React, { useState, useEffect } from "react";
import { searchForPost } from "../../redux/actions/postsActions/postsActions";
import { connect } from "react-redux";

const SearchPost = (props) => {
  const [search, setSearch] = useState("");
  const { searchForPost } = props;

  useEffect(() => {
    searchForPost(search);
  }, [search]);

  return (
    <div>
      <form>
        <input
          placeholder="Search for post"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
const actions = {
  searchForPost
};
export default connect(null, actions)(SearchPost);
