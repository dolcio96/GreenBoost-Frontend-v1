import { Buffer } from 'buffer/';

export function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new global.FileReader();
      reader.onload = () => resolve(Buffer.from(reader.result));
      reader.onerrror = reject;
      reader.readAsArrayBuffer(file);
    });
  }