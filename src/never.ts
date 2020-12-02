export function logError(error: Error) {
    console.error(error);
    throw error;
}