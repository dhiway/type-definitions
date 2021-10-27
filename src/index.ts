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

export const cordTypes = {
  base,
  entity,
  schema,
  stream,
  networkTreasury,
};

export const types = {
  ...typesFromDefs(cordTypes),
};

export const rpc = jsonrpcFromDefs(cordTypes);
export const typesAlias = typesAliasFromDefs(cordTypes);

const bundle = {
  rpc,
  types: [
    {
      minmax: [undefined, undefined] as any,
      types: {
        ...types,
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
