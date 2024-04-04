import { http, HttpResponse } from "msw";
import { nanoid } from "@reduxjs/toolkit";
import { factory, oneOf, manyOf, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

const NUM_USERS = 3;
const POSTS_PER_USER = 5;
const RECENT_NOTIFICATIONS_DAYS = 7;
const PRODUCTS = 9;

const token = nanoid();

/* MSW Data Model Setup */

export const db = factory({
  user: {
    id: primaryKey(nanoid),
    firstName: String,
    lastName: String,
    name: String,
    username: String,
    posts: manyOf("post"),
  },

  post: {
    id: primaryKey(nanoid),
    title: String,
    date: String,
    content: String,
    reactions: oneOf("reaction"),
    comments: manyOf("comment"),
    user: oneOf("user"),
  },
  product: {
    id: primaryKey(nanoid),
    name: String,
    image: String,
    description: String,
    brand: String,
    category: String,
    price: Number,
    countInStock: Number,
    rating: Number,
    numReviews: Number,
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

// create functions to generate mock data

const createProductData = () => {
  return {
    id: faker.string.nanoid(),
    description: faker.commerce.productDescription(),
    brand: faker.company.name(),
    name: faker.commerce.productName(),
    price: faker.finance.amount(),
    numReviews: faker.number.int({ min: 0, max: 10 }),
    image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
    rating: faker.number.int({ min: 1, max: 5 }),
  };
};

const createUserData = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    username: faker.internet.userName(),
  };
};

const createPostData = (user) => {
  return {
    title: faker.lorem.words(),
    date: faker.date.recent({ days: RECENT_NOTIFICATIONS_DAYS }).toISOString(),
    user,
    content: faker.lorem.paragraphs(),
    reactions: db.reaction.create(),
  };
};

// Create an initial set of posts

for (let j = 0; j < PRODUCTS; j++) {
  const newProduct = createProductData();
  db.product.create(newProduct);
}

for (let i = 0; i < NUM_USERS; i++) {
  const author = db.user.create(createUserData());

  for (let j = 0; j < POSTS_PER_USER; j++) {
    const newPost = createPostData(author);
    db.post.create(newPost);
  }
}

const serializePost = (post) => ({
  ...post,
  user: post.user.id,
});

const serializeProduct = (product) => ({
  ...product,
});

/* MSW REST API Handlers */

export const handlers = [
  http.get("/fakeApi/products", function () {
    const products = db.product.getAll(serializeProduct);
    return HttpResponse.json(products);
  }),
  http.get("/fakeApi/products/:productId", async function ({ params }) {
    const product = db.product.findFirst({
      where: { id: { equals: params.productId } },
    });

    return HttpResponse.json(serializeProduct(product));
  }),
  http.get("/fakeApi/posts", function () {
    const posts = db.post.getAll().map(serializePost);
    return HttpResponse.json(posts);
  }),
  http.get("/fakeApi/posts/:postId", async function ({ params }) {
    const post = db.post.findFirst({
      where: { id: { equals: params.postId } },
    });

    return HttpResponse.json(serializePost(post));
  }),
];
