import { getDocs, collection, query, where } from "firebase/firestore/lite";
import db from "../firebaseConfig";
import {
  IMultiDayTour,
  IOneDayTour,
  ITransfers,
  TourTypeMap,
} from "../dbschema";

export const oneDayTours = async (): Promise<IOneDayTour[]> => {
  const toursSnapshot = await getDocs(collection(db, "one-day-tours"));

  const dataArr: IOneDayTour[] = [];

  toursSnapshot.forEach((doc) => {
    dataArr.push(doc.data() as IOneDayTour);
  });

  return dataArr;
};

export const multiDayTours = async (): Promise<IMultiDayTour[]> => {
  const toursSnapshot = await getDocs(collection(db, "multi-day-tours"));

  const dataArr: IMultiDayTour[] = [];

  toursSnapshot.forEach((doc) => {
    dataArr.push(doc.data() as IMultiDayTour);
  });

  return dataArr;
};

export const transfers = async (): Promise<ITransfers[]> => {
  const transferSnapshot = await getDocs(collection(db, "transfers"));

  const dataArr: ITransfers[] = [];
  transferSnapshot.forEach((doc) => {
    dataArr.push(doc.data() as ITransfers);
  });

  return dataArr;
};

export const getTourById = async (
  tourType: string,
  tourId: string | string[]
): Promise<IOneDayTour | IMultiDayTour | null> => {
  // Try to fetch the specific one-day tour

  let tourTypeQ = "";

  switch (tourType) {
    case "oneDayTours":
      tourTypeQ = "one-day-tours";
      break;
    case "multiDayTours":
      tourTypeQ = "multi-day-tours";
  }

  let toursSnapshot = await getDocs(
    query(collection(db, tourTypeQ), where("id", "==", tourId))
  );

  let data: IOneDayTour | IMultiDayTour | null = null;

  toursSnapshot.forEach((doc) => {
    data = doc.data() as IOneDayTour;
  });

  return data;
};
