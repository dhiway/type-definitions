export default {
  rpc: {},
  types: {
    SchemaDetails: {
      hash: "HashOf",
      cid: "Option<IdentifierOf>",
      parent_cid: "Option<IdentifierOf>",
      creator: "CordAccountOf",
      block: "BlockNumber",
      permissioned: "bool",
      revoked: "bool",
    },
    SchemaCommit: {
      hash: "HashOf",
      cid: "Option<IdentifierOf>",
      block: "BlockNumber",
      commit: "SchemaCommitOf",
    },
    SchemaCommitOf: {
      _enum: [
        "Genesis",
        "Update",
        "Delegate",
        "RevokeDelegation",
        "Permission",
        "Status",
      ],
    },
  },
};
