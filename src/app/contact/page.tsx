import React from "react";
import { Image } from "@chakra-ui/react";
const contact = () => {
  return (
    <div className="container mx-auto px-4 py-80">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8">
          <Image
            src="/contact/nafplio.webp"
            alt="Scenic view of a town with buildings, a mountain in the background, and a clear sky"
            className="rounded-lg mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">Contact information</h2>
          <p className="mb-4">
            For inquiries, bookings, or assistance, please feel free to reach
            out to us:
          </p>
          <p className="mb-2">(+30) 6999438353</p>
          <p>info@ditravel.gr</p>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send a message</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your name*"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your email*"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border rounded-md h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-red-500 text-white rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
