import { Buffer } from 'buffer';

 function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new global.FileReader();
      reader.onload = () => resolve(Buffer.from(reader.result));
      reader.onerrror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  function formatDate(stringDate){
    const date = new Date('04 Dec 2020 00:12:00 GMT');
    let dateFormatted = date.toLocaleDateString();
    console.log(dateFormatted); // 23/08/2022
    return dateFormatted
  }

  export {readFile, formatDate}