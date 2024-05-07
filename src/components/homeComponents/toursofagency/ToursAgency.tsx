import ButtonHover from "@/components/ButtonHover";
import React, { useEffect, useState } from "react";
import { IMultiDayTour, IOneDayTour } from "@/firebase/dbschema";
import { multiDayTours, oneDayTours } from "@/firebase/home/dbquery";
import "./tours.css";
const ToursAgency = () => {
  const [oneDayTourState, setOneDayTours] = useState<IOneDayTour[]>([]);
  const [multiDayToursState, setMultiDayTours] = useState<IMultiDayTour[]>([]);

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

  useEffect(() => {
    console.log(oneDayTourState);
  }, [oneDayTourState]);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white-100">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <img
            src="/parthenon.webp"
            alt="Scenic view of Acropolis, Athens, representing the tour location"
            className="rounded-lg"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 w-3/4">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            TOURS OF OUR AGENCY
          </h1>
          <div className="flex flex-wrap justify-between">
            <div className="tour-column w-1/2 pr-4">
              <h2 className="text-xl font-semibold mb-2">One Day Tours</h2>
              <ul>
                {oneDayTourState.map((tour) => (
                  <li className="flex justify-between mb-1 hover-effect p-2 rounded">
                    <span>{tour.name}</span>
                    <a href="#" className="text-blue-600">
                      View Route
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tour-column w-1/2 pl-4">
              <h2 className="text-xl font-semibold mb-2">Multi Day Tours</h2>
              <ul>
                {multiDayToursState.map((tour) => (
                  <li className="flex justify-between mb-1 hover-effect p-2 rounded">
                    <span>{tour.name}</span>
                    <a href="#" className="text-blue-600">
                      View Route
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <ButtonHover buttonText="Book Now" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToursAgency;
