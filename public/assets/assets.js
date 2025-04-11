import category1 from "@/public/assets/Alm.webp";
import category2 from "@/public/assets/Cash-1.webp";
import category3 from "@/public/assets/Pista-2.webp";
import category4 from "@/public/assets/Rais.webp";
import service1 from "@/public/assets/vehicle.webp";
import service2 from "@/public/assets/return.webp";
import service3 from "@/public/assets/verified.webp";
import service4 from "@/public/assets/headphones.webp";

export const navigationList = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "About Us",
    path: "/contact",
  },
  {
    title: "Contact Us",
    path: "/login",
  },
  {
    title: "FAQS",
    path: "/register",
  },
  {
    title: "Track Order",
    path: "/track-order",
  },
  {
    title: "Flash Sale",
    path: "/flash-sale",
  },
];

export const categoriesDropDown = [
  {
    title: "Fruits",
    path: "/fruits",
  },
  {
    title: "Dry Fruits",
    path: "/dry-fruits",
  },
  {
    title: "Snacks",
    path: "/snacks",
  },
  {
    title: "Gift Boxes",
    path: "/gift-boxes",
  },
];

export const categoriesList = [
  {
    image: category1,
    id: 1,
  },
  {
    image: category2,
    id: 2,
  },
  {
    image: category3,
    id: 3,
  },
  {
    image: category4,
    id: 4,
  },
];

export const services = [
  {
    image: service1,
    title: "Easy free delivery",
    description: "Order on Rs3000*",
    id: 1,
  },
  {
    image: service2,
    title: "Premium Quality",
    description: "Fresh Stock",
    id: 2,
  },
  {
    image: service3,
    title: "Easy return policy",
    description: "7 days return",
    id: 3,
  },
  {
    image: service4,
    title: "24*7 online suport",
    description: "Premium Service",
    id: 4,
  },
];
