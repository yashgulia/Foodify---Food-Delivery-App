const Shimmer = ({ name }) => {
  return (
    <div className="mb-20 mt-28 w-screen">
      <div className="bg-[#000814] flex justify-center items-center tracking-widest text-white text-2xl w-screen h-80 mb-10">
        <p className="text-lg lg:text-2xl">Looking for {name} near you ...</p>
      </div>
      <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 mx-20 lg:mx-48">
        {Array(8)
          .fill("")
          .map((e, index) => (
            <div
              className="p-2 m-2 w-52 sm:w-48 bg-[#1a2431] opacity-60 h-40 animate-pulse"
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
