interface BaseProduct {
  id: string;
  quantity: number;
}

export class Cart<
  Product extends BaseProduct,
  Items extends Map<string, Product> | Product[] = Product[]
> {
  constructor(private items: Items) {}

  addItem(item: Product) {
    if (this.items instanceof Map) {
      this.items.set(item.id, item);
    } else if (this.items instanceof Array) {
      this.items.push(item);
    }
  }

  getItem(id: string): Product {
    if (this.items instanceof Map) {
      return this.items.get(id);
    } else if (this.items instanceof Array) {
      return this.items.find((item) => item.id === id);
    }
  }
}
