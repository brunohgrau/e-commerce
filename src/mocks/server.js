import { http, HttpResponse } from "msw";
import { nanoid } from "@reduxjs/toolkit";
import { factory, oneOf, manyOf, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

const NUM_USERS = 3;
const POSTS_PER_USER = 5;
const RECENT_NOTIFICATIONS_DAYS = 7;

const token = nanoid();

/* MSW Data Model Setup */

export const db = factory({
  post: {
    id: primaryKey(nanoid),
    title: String,
    date: String,
    content: String,
    //reactions: oneOf("reaction"),
    //comments: manyOf("comment"),
    //user: oneOf("user"),
  },
  product: {
    id: primaryKey(nanoid),
    name: String,
  },
  comment: {
    id: primaryKey(String),
    date: String,
    text: String,
    post: oneOf("post"),
  },
  reaction: {
    id: primaryKey(nanoid),
    thumbsUp: Number,
    hooray: Number,
    heart: Number,
    rocket: Number,
    eyes: Number,
    post: oneOf("post"),
  },
});

const createPostData = () => {
  return {
    title: faker.lorem.words(),
    date: faker.date.recent({ days: RECENT_NOTIFICATIONS_DAYS }).toISOString(),
    content: faker.lorem.paragraphs(),
    reactions: db.reaction.create(),
  };
};

const createProductData = () => {
  return {
    name: faker.commerce.productName(),
  };
};

// Create an initial set of posts

for (let j = 0; j < POSTS_PER_USER; j++) {
  const newPost = createPostData();
  db.post.create(newPost);
  const newProduct = createProductData();
  db.product.create(newProduct);
}

const serializePost = (post) => ({
  ...post,
});

const serializeProduct = (product) => ({
  ...product,
});

/* MSW REST API Handlers */

export const handlers = [
  http.get("/fakeApi/posts", function () {
    const posts = db.post.getAll().map(serializePost);
    return HttpResponse.json(posts);
  }),
  http.get("/fakeApi/products", function () {
    const products = db.product.getAll(serializeProduct);
    return HttpResponse.json(products);
  }),
];
