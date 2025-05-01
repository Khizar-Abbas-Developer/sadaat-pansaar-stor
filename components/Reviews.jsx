import React, { useState } from "react";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Sara Ahmed",
      city: "Lahore",
      text: "Kamazon offers a fantastic shopping experience! The products are high quality and delivery is prompt. Highly recommend for anyone looking for an online store.",
      stars: 5,
    },
    {
      name: "Ali Khan",
      city: "Karachi",
      text: "I love shopping at Kamazon! The site is user-friendly and efficient.",
      stars: 4,
    },
  ]);

  const [formData, setFormData] = React.useState({
    name: "",
    city: "",
    text: "",
    stars: 0,
  });

  const colors = [
    "bg-blue-400",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-yellow-400",
    "bg-red-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-400",
  ];

  const getColorClass = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.city || !formData.text) {
      alert("Please fill in all fields.");
      return;
    }
    setReviews((prev) => [...prev, formData]);
    // Send formData to backend here
    setFormData({ name: "", city: "", text: "", stars: 5 });
  };

  return (
    <section className="py-16 bg-white px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl text-center md:text-2xl font-medium text-gray-900">
          Customers Reviews
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          See what our customers are saying about their shopping experience with
          us.
        </p>

        {/* Review Form */}
        {/* <form
          onSubmit={handleSubmit}
          className="mt-16 bg-white border border-gray-200 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Leave a Review
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g., John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="e.g., Karachi"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-gray-700 font-medium">
              Review
            </label>
            <textarea
              name="text"
              rows="5"
              placeholder="Write your experience..."
              value={formData.text}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            ></textarea>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-gray-700 font-medium">
              Rating
            </label>
            <div className="flex space-x-2 text-2xl text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, stars: star })}
                  className={`transition ${
                    star <= formData.stars ? "text-yellow-400" : "text-gray-300"
                  } hover:scale-110`}
                  aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-600 transition shadow-md"
          >
            Submit Review
          </button>
        </form> */}

        {/* Review Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#eef7fb] rounded-lg p-6 flex flex-col items-start justify-between shadow-sm"
            >
              <div>
                <div className="text-xl text-black mb-2 text-start">
                  {"★".repeat(review.stars)}
                  {"☆".repeat(5 - review.stars)}
                </div>
                <p className="text-gray-700 text-base leading-relaxed text-start">
                  {review.text}
                </p>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <div
                  className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-semibold text-lg uppercase ${getColorClass(
                    review.name
                  )}`}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-black">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
