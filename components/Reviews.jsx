import axios from "axios";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader, GridLoader } from "react-spinners";

const CustomerReviews = ({ productId }) => {
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      if (!formData.name || !formData.city || !formData.text) {
        toast.error("Please fill in all fields.");
        return;
      }
      const response = await axios.post(`${URL}/api/v1/review/review`, {
        ...formData,
        productId,
      });
      setLoading(true);
      fetchReviews();
      setFormData({ name: "", city: "", text: "", stars: 0 });
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoading(false);
    }

    // Send formData to backend here
    // setFormData({ name: "", city: "", text: "", stars: 5 });
  };
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${URL}/api/v1/review/review/${productId}`
      );
      console.log(response.data.reviews);
      setReviews(response.data.reviews);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, [productId]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center h-[20vh] items-center">
          <GridLoader color="#5fa800" />
        </div>
      ) : (
        <section className="py-16 bg-white px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl text-center md:text-2xl font-medium text-gray-900">
              Customers Reviews
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              See what our customers are saying about their shopping experience
              with us.
            </p>

            {/* Review Form */}

            {/* Review Cards */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {reviews &&
                reviews.length > 0 &&
                reviews.slice(0, 4).map((review, index) => (
                  <div
                    key={index}
                    className="bg-[#e1ece3] rounded-lg p-6 flex flex-col items-start justify-between shadow-sm"
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
                        <p className="font-semibold text-black">
                          {review.name}
                        </p>
                        <p className="text-gray-500 text-sm">{review.city}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-8 bg-white border border-gray-200 rounded-xl shadow-md px-5 py-5 max-w-md mx-auto"
            >
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                ✨ Leave a Review
              </h3>
              {/* Rating */}
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex items-center justify-center space-x-3 mb-4 mt-2 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, stars: star })}
                      className={`transition cursor-pointer hover:scale-105 ${
                        formData.stars >= star
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      <Star className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#5fa800]"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Karachi"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#5fa800]"
                  />
                </div>
              </div>

              {/* Review */}
              <div className="mt-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Experience
                </label>
                <textarea
                  name="text"
                  rows="2"
                  placeholder="Share your experience..."
                  value={formData.text}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#5fa800] resize-none"
                />
              </div>

              {/* Submit */}
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-[#5fa800] cursor-pointer hover:bg-green-600 text-white text-sm font-medium py-2 rounded-md shadow-sm transition"
                >
                  {submitLoading ? <ClipLoader size={15} /> : "🚀"} Submit
                  Review
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default CustomerReviews;
