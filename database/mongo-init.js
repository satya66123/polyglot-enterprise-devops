db = db.getSiblingDB("polyglotmongo");

db.users.insertMany([
  { _id: 1, name: "John", city: "Hyderabad" },
  { _id: 2, name: "Sara", city: "Chennai" }
]);

db.orders.insertMany([
  { user_id: 1, product: "Laptop", amount: 900 },
  { user_id: 1, product: "Mouse", amount: 20 },
  { user_id: 2, product: "Phone", amount: 500 }
]);