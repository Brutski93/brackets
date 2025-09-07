function simplifere(str, open, close) {
  let newStr = str;
  for (let i = 1; i < newStr.length; i += 1) {
    if (
      close.includes(newStr[i]) &&
      !open.includes(newStr[i]) &&
      close.indexOf(newStr[i]) === open.indexOf(newStr[i - 1])
    ) {
      newStr = newStr.slice(0, i - 1) + newStr.slice(i + 1);
      break;
    }
  }
  if (str.length === newStr.length) return newStr;
  return simplifere(newStr, open, close);
}

function simplifereStep3(str, open, close) {
  let newStr = str;
  for (let i = 1; i < newStr.length; i += 1) {
    if (
      close.includes(newStr[i]) &&
      close.indexOf(newStr[i]) === open.indexOf(newStr[i - 1])
    ) {
      newStr = newStr.slice(0, i - 1) + newStr.slice(i + 1);
      break;
    }
  }
  if (str.length === newStr.length) return newStr;
  return simplifereStep3(newStr, open, close);
}

module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  const open = [];
  const close = [];
  for (let i = 0; i < bracketsConfig.length; i += 1) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
  let newStr = simplifere(str, open, close);
  newStr = simplifereStep3(newStr, open, close);
  return newStr.length === 0;
};
