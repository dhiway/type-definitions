export default {
  rpc: {},
  types: {
    StreamDetails: {
      streamHash: "HashOf",
      cid: "Option<IdentifierOf>",
      parent_cid: "Option<IdentifierOf>",
      schema: "Option<IdOf>",
      link: "Option<IdOf>",
      creator: "CordAccountOf",
      block: "BlockNumber",
      revoked: "bool",
    },
    StreamCommit: {
      hash: "HashOf",
      cid: "Option<IdentifierOf>",
      block: "BlockNumber",
      commit: "StreamCommitOf",
    },
    StreamCommitOf: {
      _enum: ["Create", "Update", "Status"],
    },
    StreamLink: {
      identifier: "IdOf",
      creator: "CordAccountOf",
    },
  },
};
