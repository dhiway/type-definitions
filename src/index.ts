import type { OverrideBundleDefinition } from "@polkadot/types/types";

import { types03 } from "./types_03";
import { types05 } from "./types_05";

export { types03, types05 };

export const typeBundleForPolkadot: OverrideBundleDefinition = {
  types: [
    {
      minmax: [3, 4],
      types: types03,
    },
    {
      minmax: [5, undefined],
      types: types05,
    },
  ],
};
