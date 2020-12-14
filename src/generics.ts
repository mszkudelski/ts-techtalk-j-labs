interface BaseProduct {
  id: string;
  quantity: number;
}

export class Cart {
  constructor(private items: BaseProduct[]) {}

  addItem(item: BaseProduct) {
    this.items.push(item);
  }

  getItem(id: string): BaseProduct {
    return this.items.find((item) => item.id === id);
  }
}
