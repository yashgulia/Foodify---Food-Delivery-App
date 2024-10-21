const ShimmerCard = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {Array(4)
        .fill("")
        .map((e, index) => (
          <div
            className="p-2 m-2 w-60 bg-[#a2a4b3] opacity-40 h-40"
            key={index}
          />
        ))}
    </div>
  );
};

export default ShimmerCard;
