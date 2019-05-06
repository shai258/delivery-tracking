import { Step } from './step.model';

export const STEPS: Step[] = [
  { name: 'Ordered', description: 'Prepare your order in the warehouses', happened: true },
  { name: 'Dispatched', description:'Your order has been sent to the port', happened: false},
  { name: 'Waiting for transport', description:'Your order is waiting in the port  - country of origin', happened: false },
  { name: 'In transit', description:'Your order is shipping', happened: false },
  { name: 'Waiting for transport', description:'Your order is waiting in the port  - country of destination', happened: false },
  { name: 'In transit', description:'Your order has been sent to your diraction', happened: false },
  { name: 'Delivered', description:'Your order has arrived', happened: false },
];