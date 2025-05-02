"use client";
import Image from "next/image";
import React from "react";
import deliveryIcon from "@/public/assets/about-assets/delivery.webp";

const ContactUsPage = () => {
  return (
    <div className="mt-[145px] bg-white text-black">
      <div className="w-full px-6 bg-white py-12">
        <div className="p-2 shadow-2xl rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10497.866124991958!2d2.294481!3d48.8583701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd25b02e69%3A0xb452a3b3dbb46ad9!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1714568492731!5m2!1sen!2sfr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
      {/*  */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse xl:flex-row w-full xl:w-[80%] mx-auto bg-white shadow-2xl rounded-2xl">
          {/* Left Section */}
          <div className="bg-[#efefef] w-full xl:w-[50%] px-6 sm:px-8 pb-20 pt-8 rounded-t-2xl xl:rounded-tr-none xl:rounded-bl-2xl">
            <p className="text-2xl font-medium">
              Get In <span className="text-[#5fa800]">Touch</span>
            </p>
            <p className="my-4">
              We are a dealer, wholesaler, and online retailer of dry fruits in
              Pakistan...
            </p>

            <div className="flex flex-col gap-8 py-4">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full sm:w-1/2">
                  {/* Address */}
                  <div className="w-fit">
                    <Image
                      src={deliveryIcon}
                      width={60}
                      height={60}
                      alt="delivery"
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xl font-medium tracking-wider">ADDRESS</p>
                  <p>Shop number 1, 29 Iqbal block...</p>
                </div>

                <div className="flex flex-col gap-1 w-full sm:w-1/2">
                  {/* Opening hours */}
                  <div className="w-fit">
                    <Image
                      src={deliveryIcon}
                      width={60}
                      height={60}
                      alt="delivery"
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xl font-medium uppercase tracking-wider">
                    Opening hours
                  </p>
                  <p className="flex flex-col gap-2">
                    <span>Monday to Sunday</span>
                    <span>9:00 am To 9:00 pm</span>
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full sm:w-1/2">
                  {/* Email */}
                  <div className="w-fit">
                    <Image
                      src={deliveryIcon}
                      width={60}
                      height={60}
                      alt="delivery"
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xl font-medium uppercase tracking-wider">
                    email
                  </p>
                  <p>info@khandryfruits.com</p>
                </div>

                <div className="flex flex-col gap-1 w-full sm:w-1/2">
                  {/* Phone */}
                  <div className="w-fit">
                    <Image
                      src={deliveryIcon}
                      width={60}
                      height={60}
                      alt="delivery"
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xl font-medium uppercase tracking-wider">
                    call us
                  </p>
                  <p className="flex flex-col gap-2">
                    <span>0304-9996000 | 0345-0144865</span>
                    <span>04237 444400</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-[#ffffff] w-full xl:w-[50%] px-6 sm:px-8 pb-20 pt-8 rounded-b-2xl xl:rounded-bl-none xl:rounded-tr-2xl">
            <p className="text-2xl font-medium">
              Feel Free To <span className="text-[#5fa800]">Contact Us</span>
            </p>
            <p className="my-4">
              You are welcome to contact our consulting team via form...
            </p>

            <div className="flex flex-col py-4 gap-6">
              {/* Inputs */}
              <div className="w-full flex flex-col gap-1">
                <p className="font-medium">Your Name</p>
                <input
                  type="text"
                  className="border border-gray-300 px-3 w-full py-[5px] outline-none"
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <p className="font-medium">Your Number</p>
                <input
                  type="text"
                  className="border border-gray-300 px-3 w-full py-[5px] outline-none"
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <p className="font-medium">Your Email</p>
                <input
                  type="text"
                  className="border border-gray-300 px-3 w-full py-[5px] outline-none"
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <p className="font-medium">Your Message</p>
                <textarea
                  className="border border-gray-300 px-3 w-full py-[5px] outline-none"
                  rows="4"
                ></textarea>
              </div>

              <div>
                <button className="bg-[#5fa800] text-white px-5 py-2 font-medium">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
