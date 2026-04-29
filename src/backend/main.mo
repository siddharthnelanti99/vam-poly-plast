import Map "mo:core/Map";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import { migration } "Migration";

(with migration)
persistent actor {
  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    productInterest : Text;
    timestamp : Int;
  };

  var nextId : Nat = 0;
  let submissions = Map.empty<Text, ContactSubmission>();
  let productInquiryCounts = Map.empty<Text, Nat>();

  public shared func submitContactForm(
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
    productInterest : Text
  ) : async { #ok : Nat; #err : Text } {
    let id = nextId;
    nextId += 1;

    let submission : ContactSubmission = {
      id;
      name;
      email;
      phone;
      message;
      productInterest;
      timestamp = Time.now();
    };

    submissions.add(id.toText(), submission);

    let currentCount = switch (productInquiryCounts.get(productInterest)) {
      case (null) { 0 };
      case (?count) { count };
    };
    productInquiryCounts.add(productInterest, currentCount + 1);

    #ok(id);
  };

  public query func getContactSubmission(id : Nat) : async ?ContactSubmission {
    submissions.get(id.toText());
  };

  public query func getAllContactSubmissions() : async [ContactSubmission] {
    let arr = submissions.values().toArray();
    arr.sort(func(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Nat.compare(a.id, b.id)
    });
  };

  public query func getSubmissionCount() : async Nat {
    submissions.size();
  };

  public query func getProductInquiryCount(productCategory : Text) : async Nat {
    switch (productInquiryCounts.get(productCategory)) {
      case (null) { 0 };
      case (?count) { count };
    };
  };

  public query func getAllProductInquiryCounts() : async [(Text, Nat)] {
    productInquiryCounts.entries().toArray();
  };
};
