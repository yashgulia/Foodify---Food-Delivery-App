const ShimmerCard = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {Array(4)
        .fill("")
        .map((e, index) => (
          <div
            className="p-2 m-2 w-60 bg-[#1a2431] opacity-60 h-40 animate-pulse"
            key={index}
          />
        ))}
    </div>
  );
};

export default ShimmerCard;
