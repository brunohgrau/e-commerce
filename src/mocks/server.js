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
    description: String,
    brand: String,
    category: String,
    price: Number,
    countInStock: Number,
    rating: Number,
    numReviews: Number,
    image: String,
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

const createProductData = () => {
  return {
    name: faker.commerce.productName(),
    price: faker.finance.amount(),
    numReviews: faker.number.int({ min: 0, max: 10 }),
    image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
  };
};

// Create an initial set of posts

for (let j = 0; j < POSTS_PER_USER; j++) {
  const newProduct = createProductData();
  db.product.create(newProduct);
}

const serializeProduct = (product) => ({
  ...product,
});

/* MSW REST API Handlers */

export const handlers = [
  http.get("/fakeApi/products", function () {
    const products = db.product.getAll(serializeProduct);
    return HttpResponse.json(products);
  }),
  http.post("/fakeApi/products", async function ({ request }) {
    const data = await request.json();

    if (data.content === "error") {
      return new HttpResponse(
        JSON.stringify("Server error saving this post!"),
        {
          status: 500,
        }
      );
    }
    const product = db.product.create(data);
    return HttpResponse.json(serializeProduct(product));
  }),
];
