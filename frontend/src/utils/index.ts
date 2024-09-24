import * as CryptoJS from "crypto-js";

const secretKey = process.env.REACT_APP_PASSWORD_SECRET_KEY as string;

export const encryptData = (plainText: string) => {
  const encryptedData = CryptoJS.AES.encrypt(plainText, secretKey).toString();
  return encryptedData;
};
