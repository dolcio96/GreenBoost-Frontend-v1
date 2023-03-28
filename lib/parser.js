import { Buffer } from 'buffer/';

 function ReadFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new global.FileReader();
      reader.onload = () => resolve(Buffer.from(reader.result));
      reader.onerrror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  function ParseDate(date){
    let dateFormat = date.format('D/MM/YYYY');
    console.log(dateFormat); // 23/08/2022
    return dateFormat
  }

  export {ReadFile, ParseDate}