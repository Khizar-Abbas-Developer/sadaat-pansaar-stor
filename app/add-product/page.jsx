"use client";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ProductUploadForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    productPrice: "",
    variants: [{ variantName: "", variantPrice: "" }],
    productsInStock: "",
    description: [{ heading: "", detail: "" }],
  });
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_PRESET_NAME;
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset); // replace
    data.append("cloud_name", cloudName); // replace

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data
      );
      return res.data.secure_url;
    } catch (err) {
      console.error("Cloudinary Upload Error", err);
      return null;
    }
  };

  const handleAddVariant = () => {
    setFormData({
      ...formData,
      variants: [...formData.variants, { variantName: "", variantPrice: "" }],
    });
  };

  const handleAddDescription = () => {
    setFormData({
      ...formData,
      description: [...formData.description, { heading: "", detail: "" }],
    });
  };

  const handleChange = (e, section, index, key) => {
    if (section) {
      const updated = [...formData[section]];
      updated[index][key] = e.target.value;
      setFormData({ ...formData, [section]: updated });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const imageUrl = await uploadImageToCloudinary(selectedImage);
    if (!imageUrl) return alert("Image upload failed");

    const payload = {
      ...formData,
      image: imageUrl,
      productPrice: Number(formData.productPrice),
      productsInStock: Number(formData.productsInStock),
      variants: formData.variants.map((v) => ({
        variantName: v.variantName,
        variantPrice: Number(v.variantPrice),
      })),
    };

    try {
      await axios.post(
        "http://localhost:5000/api/v1/product/add-product",
        payload
      );
      toast.success("Product added successfully!");
    } catch (err) {
      console.error(err);
      toast.success("Failed to add product!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[150px] px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-8 space-y-8 bg-white rounded-xl shadow-lg transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-gray-800">Add New Product</h2>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="e.g. Dry Fruits"
            onChange={handleChange}
            value={formData.category}
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            placeholder="e.g. Brazil Nuts Without Shell"
            onChange={handleChange}
            value={formData.productName}
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Product Price */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Product Price (₨)
          </label>
          <input
            type="number"
            name="productPrice"
            placeholder="e.g. 2500"
            onChange={handleChange}
            value={formData.productPrice}
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Stock Quantity
          </label>
          <input
            type="number"
            name="productsInStock"
            placeholder="e.g. 100"
            onChange={handleChange}
            value={formData.productsInStock}
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-800">Variants</h3>
          {formData.variants.map((variant, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Variant Name"
                value={variant.variantName}
                onChange={(e) =>
                  handleChange(e, "variants", index, "variantName")
                }
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="number"
                placeholder="Variant Price"
                value={variant.variantPrice}
                onChange={(e) =>
                  handleChange(e, "variants", index, "variantPrice")
                }
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddVariant}
            className="text-sm text-green-600 hover:underline font-medium"
          >
            + Add another variant
          </button>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-800">
            Description Sections
          </h3>
          {formData.description.map((desc, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Heading"
                value={desc.heading}
                onChange={(e) =>
                  handleChange(e, "description", index, "heading")
                }
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                placeholder="Detail"
                value={desc.detail}
                onChange={(e) =>
                  handleChange(e, "description", index, "detail")
                }
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddDescription}
            className="text-sm text-green-600 hover:underline font-medium"
          >
            + Add another section
          </button>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Upload Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedImage(e.target.files[0])}
            className="border border-gray-300 px-4 py-3 rounded-md w-full file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-green-100 file:text-green-700 file:rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-200 disabled:opacity-60"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUploadForm;
