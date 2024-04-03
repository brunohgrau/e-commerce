import React, { useMemo } from "react";
import { useGetPostsQuery, useGetProductsQuery } from "../slices/apiSlice";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";

const Posts = () => {
  const { data: posts = [], error, isLoading } = useGetPostsQuery();
  const { data: products = [] } = useGetProductsQuery();
  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice();
    // Sort posts in descending chronological order
    sortedPosts.sort((a, b) => b.date.localeCompare(a.date));
    return sortedPosts;
  }, [posts]);

  let content = sortedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div> </div>
      <p className="post-content">{post.content.substring(0, 20)}</p>
    </article>
  ));

  let content2 = products.map((product) => (
    <article className="post-excerpt" key={product.id}>
      <h3>Product Name {product.name}</h3>
    </article>
  ));

  return <>{content2}</>;
};

export default Posts;
