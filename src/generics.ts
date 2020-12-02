interface BaseProduct {
  id: string;
  quantity: number;
}

export class Cart {
  constructor(private items: BaseProduct[]) {}

  addItem(item: BaseProduct) {
    if (this.items instanceof Map) {
      this.items.set(item.id, item);
    } else if (this.items instanceof Array) {
      this.items.push(item);
    }
  }

  getItem(id: string): BaseProduct {
    if (this.items instanceof Map) {
      return this.items.get(id);
    } else if (this.items instanceof Array) {
      return this.items.find((item) => item.id === id);
    }
  }
}
