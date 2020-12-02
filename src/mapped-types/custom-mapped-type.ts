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

class Component {
  readonly formValidationMaxLengths = {
    city: 20,
    street: 50,
    postCode: 6,
    firstName: 20,
    lastName: 20,
    phoneNumber: 16,
    secondaryPhoneNumber: 20,
    companyName: 30,
  };

  constructor() {
    this.formValidationMaxLengths.city = 111; // should be error
  }
}

// === alternative solution ===

class ComponentAlt {
  readonly formValidationMaxLengths = {
    city: 20,
    street: 50,
    postCode: 6,
    firstName: 20,
    lastName: 20,
    phoneNumber: 16,
    secondaryPhoneNumber: 20,
    companyName: 30,
  };
}
