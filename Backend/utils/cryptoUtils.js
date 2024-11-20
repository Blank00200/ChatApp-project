import crypto from "crypto";

// Use a 32-byte key (e.g., generate from a passphrase or use a static 32-byte key)
const SECRET_KEY = crypto.scryptSync("your-passphrase", "salt", 32);  // 32 bytes
const ALGORITHM = "aes-256-cbc";

// Encrypt function
export const encrypt = (text) => {
  const iv = crypto.randomBytes(16);  // 16-byte IV for AES
  const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);  // Use the 32-byte key
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return { iv: iv.toString("hex"), encryptedData: encrypted };
};

// Decrypt function
export const decrypt = (encryptedText, iv) => {
  const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, Buffer.from(iv, "hex"));
  let decrypted = decipher.update(encryptedText, "hex", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
};
