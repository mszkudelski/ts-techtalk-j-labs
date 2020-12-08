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
  email?: string;
}

function editUser(user) {}
function patchUser(user) {}

// === Pick and Omit ===

type RequiredUserId = any;

// function editUser(user) {}
// function patchUser(user) {}

// === generic version ===

type RequireFields<T, K extends keyof T> = any;
type RequireOnly<T, K extends keyof T> = any;

// function editUser(user) {}
// function patchUser(user) {}
