import { http, HttpResponse } from "msw";
import { nanoid } from "@reduxjs/toolkit";
import { factory, oneOf, manyOf, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

const NUM_USERS = 3;
const POSTS_PER_USER = 3;
const RECENT_NOTIFICATIONS_DAYS = 7;

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

// Create an initial set of users and posts
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

/* MSW REST API Handlers */

export const handlers = [
  http.get("/fakeApi/posts", function () {
    const posts = db.post.getAll().map(serializePost);
    return HttpResponse.json(posts);
  }),
];
