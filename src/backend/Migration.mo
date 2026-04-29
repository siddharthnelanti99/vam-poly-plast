// Migration module: only nextId existed in the previously deployed canister.
// submissions and productInquiryCounts are new persistent fields — no migration needed.
module Migration {
  public func migration(_ : {
    var nextId : Nat;
  }) : {
    var nextId : Nat;
  } {
    { var nextId = 0 };
  };
};
