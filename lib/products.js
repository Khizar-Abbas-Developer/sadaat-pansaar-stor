import axios from "axios";
export const fetchTwentyFourProducts = async () => {
  try {
    const URL = process.env.NEXT_PUBLIC_SERVER_URL;
    const response = await axios.get(
      `${URL}/api/v1/product/get-mains-products`
    );
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};
