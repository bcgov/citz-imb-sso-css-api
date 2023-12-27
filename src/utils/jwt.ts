// Encodes a string to a Base64-encoded string.
export const encodeJWT = (jwt: string) => Buffer.from(jwt).toString("base64");
