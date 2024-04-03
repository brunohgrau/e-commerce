import { http, HttpResponse } from "msw";
import { nanoid } from "@reduxjs/toolkit";
import { factory, oneOf, manyOf, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

const NUM_USERS = 3;
const POSTS_PER_USER = 3;
const RECENT_NOTIFICATIONS_DAYS = 7;
const NUM_PRODUCTS = 5;

const token = nanoid();

/* MSW Data Model Setup */

export const db = factory({
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
});

/* 

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

*/

const createProductData = (product) => {
  return {
    name: faker.lorem.words(),
    image: faker.image.urlPicsumPhotos(),
    description: faker.lorem.paragraphs(),
    brand: faker.lorem.words(),
    category: faker.lorem.words(),
    price: faker.number.int(),
    countInStock: faker.number.int(),
    rating: faker.number.int({ min: 1, max: 5 }),
    numReviews: faker.number.int({ min: 0, max: 5 }),
  };
};

/*

const createPostData = (user) => {
  return {
    title: faker.lorem.words(),
    date: faker.date.recent({ days: RECENT_NOTIFICATIONS_DAYS }).toISOString(),
    user,
    content: faker.lorem.paragraphs(),
    reactions: db.reaction.create(),
  };
};

*/

/*

// Create an initial set of users and posts
for (let i = 0; i < NUM_USERS; i++) {
  const author = db.user.create(createUserData());

  for (let j = 0; j < POSTS_PER_USER; j++) {
    const newPost = createPostData(author);
    db.post.create(newPost);
  }
}


*/

for (let i = 0; i < NUM_PRODUCTS; i++) {
  db.product.create(createProductData());
}

/*

const serializePost = (post) => ({
  ...post,
  user: post.user.id,
});

*/

const serializeProduct = (product) => ({
  ...product,
});

/* MSW REST API Handlers */

export const handlers = [
  http.get("/fakeApi/product", function () {
    //const posts = db.post.getAll().map(serializePost);
    const products = db.product.getAll().map(serializeProduct);
    //return HttpResponse.json(posts);
    return HttpResponse.json(products);
  }),
];
