import React, { createContext, useState, useEffect } from "react";
import { oneDayTours, multiDayTours } from "@/firebase/queries/dbquery";
import { IMultiDayTour, IOneDayTour } from "@/firebase/dbschema";

export const TourContext = createContext({});

export const TourProvider = ({ children }) => {
  const [oneDayTourData, setOneDayTourData] = useState<IOneDayTour[]>([]);
  const [multiDayTourData, setMultiDayTourData] = useState<IMultiDayTour[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      const oneDayData = await oneDayTours();
      const multiDayData = await multiDayTours();
      setOneDayTourData(oneDayData);
      setMultiDayTourData(multiDayData);
    };

    fetchTours();
  }, []);

  return (
    <TourContext.Provider value={{ oneDayTourData, multiDayTourData }}>
      {children}
    </TourContext.Provider>
  );
};
