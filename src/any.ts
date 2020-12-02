function useEffect(callback: Function, deps: any[]) {}

export function useHook(arg: string, deps: any[] = []) {
  // ...
  useEffect(() => {}, deps);
  // ...
}

type CartItem = any;

class Cart {
  constructor(private items: CartItem[]) {}

  addItem(item: CartItem) {}

  getItem(id: string): CartItem {}
}
