import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/common/Navbar/Header";
import Body from "./pages/body/Body.js";
import Footer from "./components/common/Footer/Footer";
import Error from "./components/common/ErrorHandling/Error";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Cart from "./pages/cart/Cart.js";
import Search from "./pages/search/Search.js";
import RestaurantMenu from "./pages/restaurantMenu/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Suspense, lazy } from "react";
import Shimmer from "./components/common/Shimmer/Shimmer";

const Instamart = lazy(() => import("./pages/instamart/Instamart.js"));

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
