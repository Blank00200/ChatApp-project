// utils/cryptoUtils.js

import crypto from "crypto";

const SECRET_KEY = "your-secret-key"; // Use a secure key
const ALGORITHM = "aes-256-cbc";

// Encrypt function
export const encrypt = (text) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv);
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return { iv: iv.toString("hex"), encryptedData: encrypted };
};

// Decrypt function
export const decrypt = (encryptedText, iv) => {
  const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(SECRET_KEY), Buffer.from(iv, "hex"));
  let decrypted = decipher.update(encryptedText, "hex", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
};
