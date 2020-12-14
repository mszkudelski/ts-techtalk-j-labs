// === Required and Partial ===

interface User {
  id?: string;
  name: string;
  age: number;
  email?: string;
}

function editUser(user) {
  console.log(user.id);
}
function patchUser(user) {
  console.log(user.name);
  console.log(user.id);
}

// === Pick and Omit ===

type RequiredUserId = any;

function editUser2(user) {
  console.log(user.id);
  console.log(user.age);
  console.log(user.email);
}
function patchUser2(user) {
  console.log(user.id);
  console.log(user.age);
  console.log(user.email);
}

// === generic version ===

type RequireFields<T, K extends keyof T> = any;
type RequireOnly<T, K extends keyof T> = any;

function editUser3(user) {
  console.log(user.id);
  console.log(user.age);
  console.log(user.email);
}
function patchUser3(user) {
  console.log(user.id);
  console.log(user.age);
  console.log(user.email);
}
