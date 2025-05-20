"use client";
import Image from "next/image";
import React from "react";
import shopImage from "@/public/assets/about store.webp";
import { aboutUsAnimatedContainersList } from "@/public/assets/assets";
import dryFuitsImage from "@/public/assets/Dry-Fruits.webp";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <>
      <div className="mt-[132px] xl:mt-[145px] bg-white text-black px-16 xl:px-4 py-12">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full md:w-full xl:w-[52%] flex items-center justify-center">
            <Image
              src={shopImage}
              alt="shopImage"
              width={650}
              height={650}
              quality={100}
              className="object-cover rounded-xl"
            />
          </div>
          <div className="w-full xl:w-[45%]">
            <h2 className="text-2xl xl:text-3xl my-4 xl:my-4 font-semibold mb-3 xl:text-start text-center">
              Welcome To Sadaat Pansaar Store
            </h2>
            <div className="tracking-2">
              It’s easy to order from Sadaat Pansar Store website — best in
              price, perfect in taste, ideal for home, office, or gifting to
              loved ones. We offer the best range of dry fruits available in the
              market. Regarding penis enlargement oils, while they are often
              marketed with bold claims, they should be approached with caution.
              Clinical evidence for their effectiveness is limited. Always refer
              to the manufacturer’s official website for accurate product
              details. Sadaat Pansar Store is the best place to buy dry fruits
              in Karachi, Islamabad, Lahore, Faisalabad, and Quetta, Pakistan.
              With fast deliveries, excellent customer support, and easy
              returns, it's clear why customers trust www.sadaat-pansaar.store
              for their purchases. Buy dry fruits at low prices anywhere in
              Pakistan — only from Sadaat Pansar Store.
              <div className="my-6">
                Sadaat Pansar Store is one of the most well-known and respected
                names in the dried fruit and nut industry in Pakistan. With over
                35 years of experience in the business, they have established
                themselves as a go-to source for high-quality, delicious dried
                fruits and nuts.
              </div>
              One of the things that sets Sadaat Pansar Store apart from other
              dried fruit and nut producers in Pakistan is their commitment to
              sourcing the freshest and highest-quality ingredients. They work
              closely with local farmers to ensure that the fruits and nuts used
              in their products are of the finest quality. This dedication to
              quality is evident in every aspect of their business — from
              ingredient sourcing to the careful drying and processing methods
              used to preserve the natural flavor and nutritional value of the
              fruits and nuts.
            </div>
          </div>
        </div>

        {/* //Animated Cards Container */}
        <div className="bg-[#e6e6e6] h-auto xl:h-[100px] xl:mx-10 rounded-4xl my-10">
          <div className="flex flex-wrap py-6 xl:py-0 h-full gap-6 xl:gap-0 items-center justify-between">
            {aboutUsAnimatedContainersList.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center h-full gap-4 px-4 group"
                  onMouseEnter={(e) => {
                    const image = e.currentTarget.querySelector("img");
                    image?.classList.add("flip-on-hover");
                  }}
                  onAnimationEnd={(e) => {
                    const image = e.currentTarget.querySelector("img");
                    image?.classList.remove("flip-on-hover");
                  }}
                >
                  <div className="w-fit">
                    <Image
                      src={item.icon}
                      width={60}
                      height={60}
                      alt="delivery"
                      quality={100}
                      className="object-cover"
                    />
                  </div>

                  <div className="">
                    <p className="text-xl font-medium">{item.heading}</p>
                    <p className="">{item.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h2 className="w-full text-center text-3xl font-medium my-10">
          Taste the Goodness of Dry Fruits
        </h2>

        {/* //About Content Seconday */}
        <div className="flex flex-col-reverse gap-8 xl:flex-row xl:mx-10 my-16">
          <div className="w-full xl:w-[50%]">
            <div className="tracking-2">
              In addition to producing and selling high-quality dried fruits and
              nuts, <strong>Sadaat Pansar Store</strong> also operates several
              online stores in Pakistan, making it easy for customers to
              purchase their products from the comfort of their own homes. These
              online stores offer a wide range of products, including apricots,
              peaches, plums, nectarines, cranberries, raisins, and almonds, as
              well as a variety of gift boxes and gift baskets that are perfect
              for special occasions.
              <div className="my-6">
                One of the key benefits of shopping at{" "}
                <strong>Sadaat Pansar Store’s</strong> online store is the
                convenience and ease of use. The website is user-friendly and
                easy to navigate, making it easy for customers to find the
                products they’re looking for. Additionally, the online store
                offers a wide range of payment options, including credit and
                debit cards, as well as the option to pay cash on delivery.
              </div>
            </div>
            <Link href="/shop">
              <button className="py-3 px-6 font-semibold cursor-pointer bg-[#5fa800] rounded-md text-white text-lg">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="w-full md:w-full xl:w-[45%] flex items-center justify-center">
            <Image
              src={dryFuitsImage}
              alt="shopImage"
              width={650}
              height={650}
              quality={100}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <hr className="flex-grow border-t border-gray-300" />
          <h2 className="text-2xl font-medium uppercase text-center whitespace-nowrap">
            conclusion
          </h2>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* //Conclusion */}
      </div>
      <div className="bg-white text-black pb-16">
        <div className="flex flex-col gap-6 xl:mx-10 shadow-xl p-10 rounded-xl">
          <p>
            In conclusion, <strong>Sadaat Pansar Store</strong> is a reputable
            and well-established company that produces high-quality dried fruits
            and nuts in Pakistan. They are committed to sourcing the freshest
            and highest-quality ingredients, sustainability, and giving back to
            the community. Their online stores and brick-and-mortar retail
            stores make it easy for customers to purchase their products, making
            it a convenient option for those looking for a healthy and tasty
            snack option. If you’re looking for delicious and nutritious dried
            fruits and nuts in Pakistan, <strong>Sadaat Pansar Store</strong> is
            a great choice.
          </p>
          <p>
            Dried Fruits Pakistan Inc. is a certified organic manufacturer and
            distributor of nuts and dried fruits in South East Asia. Our
            customers consist mainly of individual buyers and independently
            owned grocery stores which value working with an environmentally
            friendly company that manufactures its own products.{" "}
            <strong>Sadaat Pansar Store</strong> is one of the best dry fruits
            providers trusted by its thousands of customers. We provide
            high-quality products at reasonable prices.
          </p>
          <p>
            Dried Fruits Pakistan Inc. started as a diversified organic nuts and
            dried fruits business in 2020 as a way to generate revenue. That
            portion of the business continues to thrive into what it has become
            today. One of our core values has been to cultivate strong
            relationships with the best organic farmers in the world. Every
            year, we purchase an increasing amount of our nuts, seeds, and dried
            fruits directly from the farms, some of which we have worked with
            for over a decade. Our level of knowledge and communication with our
            farmers allows us to preserve our organic integrity and ensure fair
            business practices throughout the supply chain.{" "}
            <strong>Sadaat Pansar Store</strong>
            {""} offers top-quality dry fruits in Pakistan and provides good
            quality products.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
