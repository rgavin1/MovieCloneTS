import { createContext } from "react";

import { Feature, Slider } from "../api/API";

export const HeroContext = createContext<Feature>(null);

export const SliderContext = createContext<Slider>({});
