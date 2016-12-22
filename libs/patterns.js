export const idCard = /^\d{17}[\d,x,X]$/;

export const phoneNumber = /^1[3|4|5|7|8][0-9]\d{4,8}$/;

export const confuseMobile = (mobile) => {
  const parsed = String(mobile).replace(/ |\u3000/g, '').match(/(\d{11})$/);

  return parsed ? parsed[0].replace(/^(\d{3})\d{4}(\d{4})$/, (...r) => `${r[1]}****${r[2]}`) : mobile
};
