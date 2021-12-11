export class Order {
    id!: string;
    orderNumber!: number;
    price!: number;
    type!: OrderType;
    date!: Date;
}

export enum OrderType {
    Buy,
    Sell,
}
