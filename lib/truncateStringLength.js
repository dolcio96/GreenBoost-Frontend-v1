 function truncateStringLength(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "…"; // Aggiunge un ellisso per indicare che c'è più testo
      }
      return text;
  }

  export {truncateStringLength};