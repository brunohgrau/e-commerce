import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store";
import SingleProductScreen from "./screens/SingleProductScreen.js";
import Post from "./components/PostApp/Post.js";
import SinglePostPage from "./screens/SinglePostPage.js";
import HomeScreen from "./screens/HomeScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import CartScreen from "./screens/CartScreen.js";
import Register from "./screens/RegisterScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/product/:productId" element={<SingleProductScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<PaymentScreen />} />

      <Route path="/post" element={<Post />} />
      <Route path="/post/:postId" element={<SinglePostPage />} />
    </Route>
  )
);

async function deferRender() {
  const { worker } = await import("./mocks/browser.js");
  return worker.start();
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
