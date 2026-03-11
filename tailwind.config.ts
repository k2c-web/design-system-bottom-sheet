import { durations, easings, zIndex, radii } from "./design-system/tokens";

export default {
  theme: {
    extend: {
      transitionDuration: durations,
      transitionTimingFunction: easings,
      zIndex,
      borderRadius: radii,
    },
  },
};
