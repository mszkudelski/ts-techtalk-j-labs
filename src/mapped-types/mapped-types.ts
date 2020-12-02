// === keyof ===

type Keys = keyof {
  name: string;
  age: number;
}; // 'name' | 'age'

const person = { name: "Jan", age: 95 };
type KeysPerson = keyof typeof person; // 'name' | 'age'

// === Required and Partial ===

interface User {
  id?: string;
  name: string;
  age: number;
}

declare function editUser(user: Required<User>);
declare function patchUser(user: Partial<User>);

// === Pick and Omit ===

type RequiredUserId = Required<Pick<User, "id">>;

declare function editUser(user: User & RequiredUserId);
declare function patchUser(user: Partial<User> & RequiredUserId);

// === generic version ===

type RequireFields<T, K extends keyof T> = Required<Pick<T, K>>;

type RequireOnly<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;

declare function editUser(user: User & RequireFields<User, "id">);
declare function patchUser(user: RequireOnly<User, "id">);
