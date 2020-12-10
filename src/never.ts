export function logError(error: Error): never {
  console.error(error);
  throw error;
}

function func(a: 1|2|3) {
  switch (a) {
    case 1:
      return a;
    case 2:
      return a;
    case 3:
      return a;
    default:
      return a;
  }
}
