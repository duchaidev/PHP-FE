import axios from "axios";
import { Buffer } from "buffer";

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const convertBase64ToImage = (base64) => {
  // let image = new Buffer(base64 || "", "base64").toString("binary");
  let image = new Buffer(base64 || "", "base64").toString("utf-8");
  return image;
};

// Format lại ngày sinh để hiển thị lên input
export const formatISODateToInputDate = (isoDate, dmy = false) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = (date.getUTCDate() + 1).toString().padStart(2, "0");
  if (!dmy) {
    return `${year}-${month}-${day}`;
  } else if (dmy) {
    return `${day}/${month}/${year}`;
  }
};

export function inputOnlyNumber(event, toast) {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);

  // Chỉ cho phép nhập số (0-9)
  if (!/^[0-9]+$/.test(keyValue)) {
    event.preventDefault();
  }
}
