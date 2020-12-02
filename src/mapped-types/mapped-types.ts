// === keyof ===

type Keys = keyof {
  name: string;
  age: number;
};

const person = { name: "Jan", age: 95 };
type KeysPerson = keyof typeof person;

// === Required and Partial ===

interface User {
  id?: string;
  name: string;
  age: number;
}

declare function editUser(user);
declare function patchUser(user);

// === Pick and Omit ===

type RequiredUserId = any;

declare function editUser(user);
declare function patchUser(user);

// === generic version ===

type RequireFields<T, K extends keyof T> = any;
type RequireOnly<T, K extends keyof T> = any;

declare function editUser(user);
declare function patchUser(user);
