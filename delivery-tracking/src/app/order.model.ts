export class Order {
  orderNumber: string;
  orderStatus: number;
  title: string;
  discription: string;
  imgUrl: string;
  price: number;
  customer: Customer;
  provider: Provider;
}

interface Customer {
  name: string;
  email: string;
  phone: number;
  address: Address
}

interface Provider {
  name: string;
  email: string;
  phone: number;
  address: Address;
}

interface Address {
  country: string;
  city: string;
  street: string;
  number: number;
}