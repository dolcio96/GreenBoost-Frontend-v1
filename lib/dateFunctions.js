
function compareDate(expirationDate) {
  const elements = expirationDate.split("/")
  const deadlineDate = new Date(parseInt(elements[2], 10), parseInt(elements[1], 10) - 1, parseInt(elements[0], 10),)
  const today = new Date();
  if (deadlineDate < today) return ["red.300", "Expired CC"]
  else return ["green.300", "Valid CC"]
}

export { compareDate }