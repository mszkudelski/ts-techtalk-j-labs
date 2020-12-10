import { logError } from "./never";
import { useHook } from "./any";
import {
  CourierDelivery,
  ParcelLockerDelivery,
  stringifyDeliveryAddress,
} from "./unions";
import { Cart } from "./generics";

// === NEVER ===
try {
  throw new Error("Wrong data passed!");
} catch (error) {
  // logError(error);
}

// === ANY ===

useHook("parameter");
useHook("parameter", ["string", 123, {}]);
useHook("parameter", ["string"]);
useHook("parameter", [123, 321, 456]);

// === Discriminated Unions ===

const courier: CourierDelivery = {
  street: "Street",
  localNumber: 12,
  city: "City",
};

const parcelLocker: ParcelLockerDelivery = {
  parcelLockerId: "34AG",
  parcelLockerAddress: "Street 34",
  city: "City",
};

// console.log(stringifyDeliveryAddress(courier));
// console.log(stringifyDeliveryAddress(parcelLocker));

// === Generics ===

interface Product {
  id: string;
  quantity: number;
  name: string;
}

const product = { id: "asd-123", quantity: 1, name: "apple" };

const arrCart = new Cart([product]);

// const errorCart = new Cart([{...product, id: 123}]); // should cause error

const mapCart = new Cart<Product, Map<string, Product>>(
  new Map([["asd-123", product]])
);

// const mapErrorCart = new Cart<Product, Map<number, Product>>( // should cause error
//     new Map([[123, product]])
// );

arrCart.addItem(product);
console.log(arrCart.getItem("asd-123"));

mapCart.addItem(product);
console.log(mapCart.getItem("asd-123"));
