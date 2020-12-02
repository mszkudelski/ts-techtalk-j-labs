function useEffect(callback: Function, deps: any[]) {}

export function useHook(arg: string, deps: any[] = []) {
  // ...
  useEffect(() => {}, deps);
  // ...
}

class Cart {
  constructor(private items: any[]) {}

  addItem(item: any) {}

  getItem(id: string): any {
    return this.items.find((item) => item.id === id);
  }
}
