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
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Suspense, lazy } from "react";
import Shimmer from "./components/common/Shimmer/Shimmer";

import AuthModal from "./components/core/Auth/AuthModal.js";

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
        path: "/login",
        element: <AuthModal />,
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
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={appRouter} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
