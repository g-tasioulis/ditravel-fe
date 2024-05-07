import React from "react";
import { Image } from "@chakra-ui/react";
const about = () => {
  return (
    <div className="about-section min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-10 rounded-lg shadow-lg relative">
          <div className="about-image">
            <Image
              src="/about/sounio.webp"
              alt="Ancient Greek columns at sunset, representing the company's heritage and cultural tours"
              className="w-full"
            />
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">About the company</h2>
            <p className="text-gray-600 text-lg">
              Our company was created in 2015 and with a steady upward trend has
              established itself in the market operating with responsibility and
              consistency. Our aim is the high level travel services. our trips
              are designed with respect in nature and culture of our country. we
              have competent and experienced drivers and modern vehicles to
              ensure the best result and your complete satisfaction. the
              traveler is for us the final recipient of a beautiful excursion
              that we share with him from the moment of planning to its
              implementation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
