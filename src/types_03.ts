import type { RegistryTypes } from "@polkadot/types/types";

export const types03: RegistryTypes = {
  PublicSigningKey: "Hash",
  PublicBoxKey: "Hash",
  Signature: "MultiSignature",
  Address: "AccountId",
  LookupSource: "AccountId",
  BlockNumber: "u32",
  Index: "u32",
  RefCount: "u32",
  ErrorCode: "u16",
  Permissions: "u32",
  DelegationNodeId: "Hash",
  DelegationNode: {
    rootId: "DelegationNodeId",
    parent: "Option<DelegationNodeId>",
    owner: "AccountId",
    permissions: "Permissions",
    revoked: "bool",
  },
  DelegationRoot: {
    mtypeHash: "Hash",
    owner: "AccountId",
    revoked: "bool",
  },
  Mark: {
    mtypeHash: "Hash",
    marker: "AccountId",
    delegationId: "Option<DelegationNodeId>",
    revoked: "bool",
  },
};
