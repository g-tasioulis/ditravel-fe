export interface IOneDayTour {
  cost: number;
  duration: number;
  enchantedCost: number;
  excludedServices: Array<string>;
  extendedDesc: string;
  id: string;
  includedServices: Array<string>;
  languages: string;
  name: string;
  peopleCostLimit: number;
  smallDesc: string;
}

export interface IMultiDayTour {
  cost2ppl?: number;
  cost3ppl?: number;
  cost4ppl?: number;
  cost5ppl?: number;
  cost6ppl?: number;
  cost7ppl?: number;
  dayFour?: string;
  dayThree?: string;
  dayTwo?: string;
  dayOne?: string;
  duration: number;
  excludedServices: Array<string>;
  enchantedCost?: number;
  highlights: string;
  id: string;
  includedServices: Array<string>;
  languages: string;
  name: string;
  peopleCostLimit?: number;
  smallDesc: string;
}

export interface ITransfers {
  cost: number;
  id: string;
  maximumPpl: number;
  name: string;
  image: string;
}
