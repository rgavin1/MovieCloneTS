import { createContext } from "react";

import { Feature } from "../api/API";

export const HeroContext = createContext<Feature>(null);
