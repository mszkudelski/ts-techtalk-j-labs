export function logError(error: Error) {
  console.error(error);
  throw error;
}

function func(a) {
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
