interface BaseProduct {
  id: string;
  quantity: number;
}

export class Cart<Product extends BaseProduct> {
  constructor(private items: Product[]) {}

  addItem(item: Product) {
    this.items.push(item);
  }

  getItem(id: string): Product {
    return this.items.find((item) => item.id === id);
  }
}
