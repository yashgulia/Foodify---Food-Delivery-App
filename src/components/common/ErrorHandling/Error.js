import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#000814] text-gray-100 font-sans">
      <div className="text-center p-6 bg-[#1a2634] rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-500">Oops!!</h1>
        <h2 className="text-2xl mt-4 text-gray-300">Something went wrong</h2>
        {err ? (
          <p className="text-lg mt-6 text-gray-200">
            <span className="block">Error Code: {err.status}</span>
            <span className="block">{err.statusText}</span>
          </p>
        ) : (
          <p className="text-lg mt-6 text-gray-200">
            <span className="block">404 - Page Not Found</span>
            <span className="block">
              Sorry, the page you're looking for doesn't exist.
            </span>
          </p>
        )}
        <a
          href="/"
          className="inline-block mt-8 py-2 px-6 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Go back to Homepage
        </a>
      </div>
    </div>
  );
};

export default Error;
