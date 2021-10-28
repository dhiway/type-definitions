export default {
  rpc: {},
  types: {
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
  },
};
