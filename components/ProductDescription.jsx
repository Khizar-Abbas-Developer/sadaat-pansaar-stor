const Description = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <div
          key={item._id}
          className="max-w-full mx-auto mt-6 bg-white border border-gray-200 rounded-xl shadow-md px-5 py-4"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-start">
            {item.heading}
          </h2>
          <p className="text-sm text-gray-600 text-start">{item.detail}</p>
        </div>
      ))}
    </>
  );
};

export default Description;
