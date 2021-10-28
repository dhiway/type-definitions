export default {
  rpc: {},
  types: {
    Mark: {
      mtypeHash: "Hash",
      marker: "AccountId",
      delegationId: "Option<DelegationNodeId>",
      revoked: "bool",
    },
  },
};
