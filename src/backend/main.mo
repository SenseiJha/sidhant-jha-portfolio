import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  public type Message = {
    name : Text;
    email : Text;
    message : Text;
  };

  module Message {
    public func compare(m1 : Message, m2 : Message) : Order.Order {
      switch (Text.compare(m1.email, m2.email)) {
        case (#equal) { Text.compare(m1.name, m2.name) };
        case (order) { order };
      };
    };
  };

  var messages : [Message] = [];

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages;
  };

  public shared ({ caller }) func submitMessage(
    name : Text,
    email : Text,
    message : Text,
  ) : async () {
    let pos = messages.find(
      func(m) { m.name == name and m.email == email and m.message == message }
    );
    if (pos != null) { Runtime.trap("This message has already been submitted.") };
    let newMessage : Message = {
      name;
      email;
      message;
    };
    messages := messages.concat([newMessage]);
  };
};
