import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { useGetPostsQuery } from "../../slices/apiSlice";

const Post = () => {
  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetPostsQuery();
  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice();
    // Sort posts in descending chronological order
    sortedPosts.sort((a, b) => b.date.localeCompare(a.date));
    return sortedPosts;
  }, [posts]);

  return (
    <>
      <section className="posts-list">
        <h2>Post List</h2>

        {sortedPosts.map((post) => (
          <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <div> </div>
            <p className="post-content">{post.content.substring(0, 20)}</p>
            <Link to={`/post/${post.id}`} className="button muted-button">
              View Post
            </Link>
          </article>
        ))}
      </section>
    </>
  );
};

export default Post;
