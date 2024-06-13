"use client";
import React, { useEffect, useState } from "react";
import "./tours.css";
import { IMultiDayTour, IOneDayTour } from "@/firebase/dbschema";
import { multiDayTours, oneDayTours } from "@/firebase/queries/dbquery";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import Link from "next/link";

const Tours = () => {
  const [oneDayTourState, setOneDayTours] = useState<IOneDayTour[]>([]);
  const [multiDayToursState, setMultiDayTours] = useState<IMultiDayTour[]>([]);
  const [selectedTourType, setTourType] = useState<string>("oneDay");

  useEffect(() => {
    const fetchOneDayTours = async () => {
      const data = await oneDayTours();
      setOneDayTours(data);
    };

    const fetchMultiDayTours = async () => {
      const data = await multiDayTours();
      setMultiDayTours(data);
    };

    fetchOneDayTours();
    fetchMultiDayTours();
  }, []);

  const handleMultiDay = () => {
    setTourType("multiDay");
  };

  const handleOneDay = () => {
    setTourType("oneDay");
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Tours</h1>
        <div className="flex justify-center space-x-4 mb-6 border-b">
          <button
            className={`tab text-lg font-semibold pb-2 ${
              selectedTourType === "oneDay" ? "active" : ""
            }`}
            style={{ position: "relative" }}
            onClick={() => handleOneDay()}
          >
            One day tours
          </button>
          <button
            className={`tab text-lg font-semibold pb-2 ${
              selectedTourType === "multiDay" ? "active" : ""
            }`}
            onClick={() => handleMultiDay()}
          >
            Multi day tours
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
          {selectedTourType === "oneDay"
            ? oneDayTourState.map((tour, key) => (
                <TourCard
                  image="https://placehold.co/300x200.png?text=Athens+Acropolis"
                  title={tour.name}
                  description={tour.smallDesc}
                  duration={tour.duration}
                  language={tour.languages}
                  price={tour.cost}
                  freeCancellation={true}
                  tourType={"One Day"}
                  tourId={tour.id}
                  key={key}
                />
              ))
            : multiDayToursState.map((tour, key) => (
                <TourCard
                  image="https://placehold.co/300x200.png?text=Athens+Acropolis"
                  title={tour.name}
                  description={tour.smallDesc}
                  duration={tour.duration}
                  language={tour.languages}
                  price={tour.cost2ppl}
                  freeCancellation={true}
                  tourType={"Multi Day"}
                  tourId={tour.id}
                  key={key}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

function TourCard({
  tourId,
  tourType,
  image,
  title,
  description,
  duration,
  language,
  price,
  freeCancellation,
}) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        // Check if the image URL is cached
        const cachedImageUrl = getCachedImageUrl(tourType, title);
        if (cachedImageUrl) {
          setImageUrl(cachedImageUrl);
          return;
        }

        const storage = getStorage();
        const folderRef = ref(storage, `${tourType}/${title}`);

        const { items } = await listAll(folderRef);

        if (items.length > 0) {
          const firstImageRef = items[0];
          const url = await getDownloadURL(firstImageRef);

          // Cache the fetched image URL
          cacheImageUrl(tourType, title, url);

          setImageUrl(url);
        }
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageUrls();
  }, [tourType, title]);

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

  let tourTypeFormat = "";
  switch (tourType) {
    case "One Day":
      tourTypeFormat = "oneDayTours";
      break;
    case "Multi Day":
      tourTypeFormat = "multiDayTours";
      break;
  }

  return (
    <>
      <Link href={`/tours/${tourTypeFormat}/${tourId}`}>
        <div className="bg-white p-4 shadow rounded">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={`Placeholder image for ${title}`}
              className="rounded mb-4"
            />
          )}
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
          <div className="flex items-center text-sm mb-4">
            <i className="far fa-clock mr-2"></i>
            {duration}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <i className="fas fa-language mr-2"></i>
              Language: {language}
            </div>
            {freeCancellation && (
              <div className="flex items-center text-sm">
                <i className="fas fa-check-circle mr-2"></i>
                Free Cancellation
              </div>
            )}
          </div>
          <div className="text-right font-semibold">{price}€</div>
        </div>
      </Link>
    </>
  );
}

export default Tours;
