import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error Handling/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart/Cart.js";
import Search from "./components/Search";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/Redux/store";
import { Suspense, lazy } from "react";
import Shimmer from "./components/Shimmer.js";

const Instamart = lazy(() => import("./components/Instamart/Instamart.js"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer name={"Groceries"} />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
