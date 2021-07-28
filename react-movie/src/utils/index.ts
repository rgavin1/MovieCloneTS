import { Feature } from "../api/API";

export const randomNumber = (max: number, min: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const selectedFeature = (list: Feature[]) =>
  list[randomNumber(0, list.length)];
