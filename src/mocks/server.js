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
    email: String,
    password: String,
    isAdmin: Boolean,
    products: manyOf("product"),
  },
  product: {
    id: primaryKey(nanoid),
    user: oneOf("user"),
    name: String,
    image: String,
    brand: String,
    category: String,
    description: String,
    reviews: manyOf("review"),
    rating: Number,
    numReviews: Number,
    price: Number,
    countInStock: Number,
  },
  order: {
    id: primaryKey(nanoid),
    user: oneOf("user"),
    orderItems: {
      orderItem: {
        // id: primaryKey(nanoid),
        name: String,
        qty: Number,
        image: String,
        price: Number,
        product: oneOf("product"),
      },
    },
    shippingAddress: {
      //id: primaryKey(nanoid),
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },
    paymentMethod: String,
    paymenResult: {
      //id: primaryKey(nanoid),
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: Number,
    taxPrice: Number,
    shippingPrice: Number,
    totalPrice: Number,
    isPaid: Boolean,
    paidAt: Date,
    isDelivered: Boolean,
    deliveredAt: Date,
  },

  review: {
    id: primaryKey(nanoid),
    user: oneOf("user"),
    name: String,
    rating: Number,
    comment: String,
  },
});

// create functions to generate mock data

const createUserData = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    isAdmin: true,
  };
};

const createProductData = (user) => {
  return {
    id: faker.string.nanoid(),
    user,
    name: faker.commerce.productName(),
    image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
    brand: faker.company.name(),
    description: faker.commerce.productDescription(),
    price: faker.finance.amount(),
    numReviews: faker.number.int({ min: 0, max: 10 }),
    rating: faker.number.int({ min: 1, max: 5 }),
    countInStock: faker.number.int({ min: 0, max: 10 }),
  };
};

const createOrderData = (user) => {
  return {
    id: faker.string.nanoid(),
    user,
  };
};

// Create an initial set of posts

for (let j = 0; j < PRODUCTS; j++) {
  const author = db.user.create(createUserData());

  const newProduct = createProductData(author);
  db.product.create(newProduct);
}

/*

const serializePost = (post) => ({
  ...post,
  user: post.user.id,
});

*/

const serializeProduct = (product) => ({
  ...product,
  user: product.user.id,
});

/* MSW REST API Handlers */

export const handlers = [
  // @desc Fetch all products
  http.get("/fakeApi/products", function () {
    const products = db.product.getAll(serializeProduct);
    return HttpResponse.json(products);
  }),
  // @desc Fetch product
  http.get("/fakeApi/products/:id", async function ({ params }) {
    const product = db.product.findFirst({
      where: { id: { equals: params.id } },
    });

    return HttpResponse.json(serializeProduct(product));
  }),
];
