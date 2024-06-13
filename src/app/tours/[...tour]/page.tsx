"use client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./tour.css";
import { getTourById } from "@/firebase/queries/dbquery";
import { IMultiDayTour, IOneDayTour } from "@/firebase/dbschema";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { BasketContext } from "@/contexts/BasketContext";

interface OneDayTourProps {
  tour: IOneDayTour;
}

interface MultiDayTourProps {
  tour: IMultiDayTour;
}

const TourPage = () => {
  const params = useParams();
  const tourParams = params.tour;
  const [tour, setTour] = useState<any>();

  useEffect(() => {
    console.log(tourParams);
    const fetchTour = async () => {
      if (tourParams) {
        const fetchedTour = await getTourById(tourParams[0], tourParams[1]);
        setTour(fetchedTour);
      } else {
        console.error("Tour ID is not provided");
      }
    };

    fetchTour();
  }, [params.tour]);

  return (
    <div className="bg-gray-100 p-8">
      {tourParams[0] === "oneDayTours" ? (
        <OneDayTour tour={tour as IOneDayTour} />
      ) : (
        <MultiDayTour tour={tour as IMultiDayTour} />
      )}
    </div>
  );
};

export default TourPage;

const OneDayTour: React.FC<OneDayTourProps> = ({ tour }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const { basketItems, addToBasket } = useContext(BasketContext);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        // Check if the image URL is cached
        const cachedImageUrl = getCachedImageUrl("One Day", tour.name);
        if (cachedImageUrl) {
          setImageUrl(cachedImageUrl);
          return;
        }

        const storage = getStorage();
        const folderRef = ref(storage, `${"One Day"}/${tour?.name}`);

        const { items } = await listAll(folderRef);

        if (items.length > 0) {
          const firstImageRef = items[0];
          const url = await getDownloadURL(firstImageRef);

          cacheImageUrl("One Day", tour.name, url);

          setImageUrl(url);
        }
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageUrls();
  }, [tour?.name]);
  const cacheImageUrl = (tourType, title, url) => {
    window.imageCache = window.imageCache || {};
    window.imageCache[`${tourType}_${title}`] = url;
  };

  const getCachedImageUrl = (tourType, title) => {
    if (window.imageCache && window.imageCache[`${tourType}_${title}`]) {
      return window.imageCache[`${tourType}_${title}`];
    }
    return null;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-4 tour-header">
          {tour?.name}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={imageUrl || ""}
              alt="A scenic view of the Acropolis in Athens, Greece, under a clear blue sky"
              className="w-full h-auto image-tour"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-around">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <i className="fas fa-share-alt text-gray-600"></i>
                <i className="fas fa-heart text-gray-600"></i>
                <i className="fas fa-print text-gray-600"></i>
              </div>
              <div className="text-red-600 font-semibold text-lg">
                {tour?.cost}€
              </div>
            </div>
            <div className="flex flex-col space-y-4 ">
              <div className="text-gray-600">
                <i className="far fa-calendar-alt"></i>
                <span className="md:ml-40 text-lg">05/14/2024</span>
              </div>
              <div className="md:ml-40">
                <label htmlFor="adults" className="text-gray-600 block text-lg">
                  Adults
                </label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  min="1"
                  defaultValue="1"
                  className="border rounded text-red-600 text-center w-full md:w-32"
                />
              </div>
              <div className="md:ml-40">
                <label
                  htmlFor="children"
                  className="text-gray-600 block text-lg"
                >
                  Children (Under 6 free)
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  min="0"
                  defaultValue="0"
                  className="border rounded text-red-600 text-center w-full md:w-32"
                />
              </div>
              <div className="mt-4">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition duration-300 w-full md:w-48 md:mx-auto md:ml-40"
                  onClick={() => addToBasket(tour, imageUrl)}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-4 hidden md:block" />
          </div>
        </div>
        <div className="text-gray-600 mb-4">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <div className="mb-4"></div>
          <p>{tour?.extendedDesc}</p>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex justify-between">
          <div className="text-gray-800">
            <h3 className="font-semibold mb-2">Included/Excluded</h3>
            <ul className="text-sm list-disc pl-5">
              {tour?.includedServices.map((data, key) => {
                return <li key={key}>{data}</li>;
              })}
            </ul>
          </div>
          <div className="text-gray-800">
            <ul className="text-sm list-disc pl-5">
              {tour?.excludedServices.map((data, key) => {
                return <li key={key}>{data}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const MultiDayTour: React.FC<MultiDayTourProps> = ({ tour }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const { basketItems, addToBasket } = useContext(BasketContext);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        // Check if the image URL is cached
        const cachedImageUrl = getCachedImageUrl("Multi Day", tour.name);
        if (cachedImageUrl) {
          setImageUrl(cachedImageUrl);
          return;
        }

        const storage = getStorage();
        const folderRef = ref(storage, `${"Multi Day"}/${tour?.name}`);

        const { items } = await listAll(folderRef);

        if (items.length > 0) {
          const firstImageRef = items[0];
          const url = await getDownloadURL(firstImageRef);

          cacheImageUrl("Multi Day", tour.name, url);

          setImageUrl(url);
        }
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageUrls();
  }, [tour?.name]);
  const cacheImageUrl = (tourType, title, url) => {
    window.imageCache = window.imageCache || {};
    window.imageCache[`${tourType}_${title}`] = url;
  };

  const getCachedImageUrl = (tourType, title) => {
    if (window.imageCache && window.imageCache[`${tourType}_${title}`]) {
      return window.imageCache[`${tourType}_${title}`];
    }
    return null;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-4 tour-header">
          {tour?.name}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={imageUrl || ""}
              alt="A scenic view of the Acropolis in Athens, Greece, under a clear blue sky"
              className="w-full h-auto image-tour"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-around">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <i className="fas fa-share-alt text-gray-600"></i>
                <i className="fas fa-heart text-gray-600"></i>
                <i className="fas fa-print text-gray-600"></i>
              </div>
              <div className="text-red-600 font-semibold text-lg">
                {tour?.cost2ppl}€
              </div>
            </div>
            <div className="flex flex-col space-y-4 ">
              <div className="text-gray-600">
                <i className="far fa-calendar-alt"></i>
                <span className="md:ml-40 text-lg">05/14/2024</span>
              </div>
              <div className="md:ml-40">
                <label htmlFor="adults" className="text-gray-600 block text-lg">
                  Adults
                </label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  min="1"
                  defaultValue="1"
                  className="border rounded text-red-600 text-center w-full md:w-32"
                />
              </div>
              <div className="md:ml-40">
                <label
                  htmlFor="children"
                  className="text-gray-600 block text-lg"
                >
                  Children (Under 6 free)
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  min="0"
                  defaultValue="0"
                  className="border rounded text-red-600 text-center w-full md:w-32"
                />
              </div>
              <div className="mt-4">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition duration-300 w-full md:w-48 md:mx-auto md:ml-40"
                  onClick={() => addToBasket(tour, imageUrl)}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-4 hidden md:block" />
          </div>
        </div>
        <div className="text-gray-600 mb-4">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <div className="mb-4"></div>
          <p>{tour?.extendedDesc}</p>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex justify-between">
          <div className="text-gray-800">
            <h3 className="font-semibold mb-2">Included/Excluded</h3>
            <ul className="text-sm list-disc pl-5">
              {tour?.includedServices.map((data, key) => {
                return <li key={key}>{data}</li>;
              })}
            </ul>
          </div>
          <div className="text-gray-800">
            <ul className="text-sm list-disc pl-5">
              {tour?.excludedServices.map((data, key) => {
                return <li key={key}>{data}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
