interface UserData {
  city: string;
  street: string;
  postCode: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  secondaryPhoneNumber: string;
  companyName: string;
}

type MaxLengths<T extends {}> = { readonly [P in keyof T]: number };

class Component {
  readonly formValidationMaxLengths: MaxLengths<UserData> = Object.freeze({
    city: 20,
    street: 50,
    postCode: 6,
    firstName: 20,
    lastName: 20,
    phoneNumber: 16,
    secondaryPhoneNumber: 20,
    companyName: 30,
  });
}

// === alternative solution ===

class ComponentAlt {
  readonly formValidationMaxLengths = Object.freeze<
    Record<keyof UserData, number>
  >({
    city: 20,
    street: 50,
    postCode: 6,
    firstName: 20,
    lastName: 20,
    phoneNumber: 16,
    secondaryPhoneNumber: 20,
    companyName: 30,
  });
}
