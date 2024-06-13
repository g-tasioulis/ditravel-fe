import React from "react";
import { Image } from "@chakra-ui/react";
const Poi = () => {
  return (
    <div className="container mx-auto px-4 py-80">
      {" "}
      {/* Added py-8 for vertical padding */}
      <h2 className="text-3xl font-semibold text-center my-8">
        Places of Interest
      </h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="/poi/thessaly.webp"
            alt="Placeholder image of Thessaly with rocky landscape and historical buildings"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Thessaly</div>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="/poi/central_greece.webp"
            alt="Placeholder image of Central Greece with urban landscape and famous hill"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Central Greece
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="/poi/peloponesse.webp"
            alt="Placeholder image of Peloponnese with coastal town and clear skies"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Peloponnese
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poi;
