export function logError(error: Error): never {
  console.error(error);
  throw error;
}
