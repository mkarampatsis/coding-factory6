export interface Address {
    street: string;
    city: string;
    zipCode: string
    number: string
}

export interface PhoneNumber {
    number: string;
    type: string;
}

export interface Customer {
    givenName: string;
    surName: string;
    email: string;
    afm: string;
    phoneNumbers: PhoneNumber[];
    address: Address;
}