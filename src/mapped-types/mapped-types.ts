// === Required and Partial ===

interface User {
  id?: string;
  name: string;
  age: number;
}

function editUser(user: Required<User>) {
  console.log(user.id);
}
function patchUser(user: Partial<User>) {
  console.log(user.name);
  console.log(user.id);
}

// === Pick and Omit ===

interface EmailUser extends User {
  email?: string;
}

type RequiredUserId = Required<Pick<EmailUser, "id">>;

function editUser2(user: EmailUser & RequiredUserId) {
  console.log(user.id);
  console.log(user.age);
  console.log(user.email);
}
function patchUser2(user: Partial<EmailUser> & RequiredUserId) {
  console.log(user.id);
  console.log(user.age);
  console.log(user.email);
}

// === generic version ===

type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

type RequireOnly<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;

function editUser3(user: RequireFields<EmailUser, "id">) {
  console.log(user.id);
  console.log(user.age);
  console.log(user.email);
}
function patchUser3(user: RequireOnly<EmailUser, "id">) {
  console.log(user.id);
  console.log(user.age);
  console.log(user.email);
}
