export function logError(error: Error): never {
  console.error(error);
  throw error;
}

function func(a) {
  switch (a) {
    case 1:
      break;
    case 2:
      console.log(a);
      break;
    default:
      console.log(a);
  }
}
