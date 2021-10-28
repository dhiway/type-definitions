import base from "./base";
import entity from "./entity";
import schema from "./schema";
import stream from "./stream";
import {
  jsonrpcFromDefs,
  typesAliasFromDefs,
  typesFromDefs,
} from "@open-web3/orml-type-definitions/utils";
import networkTreasury from "./networkTreasury";
import cordv1 from "./cordv1";
import mark from "./mark";
import delegation from "./delegation";

export const cordTypesV1 = {
  cordv1,
  mark,
  delegation,
};

export const cordTypesV2 = {
  base,
  entity,
  schema,
  stream,
  networkTreasury,
};

export const types01 = {
  ...typesFromDefs(cordTypesV1),
};

export const types02 = {
  ...typesFromDefs(cordTypesV2),
};

export const rpc = jsonrpcFromDefs(cordTypesV2);
export const typesAlias = typesAliasFromDefs(cordTypesV2);

const bundle = {
  rpc,
  types: [
    {
      minmax: [3, 4] as any,
      types: {
        ...types01,
      },
    },
    {
      minmax: [5, undefined] as any,
      types: {
        ...types02,
      },
    },
  ],
  alias: typesAlias,
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    cord: bundle,
  },
};
