export const getFormattedDate = (date, delimiter='') => {
  const month = date.toLocaleString('default', { month: 'long' });
  return `${month}${delimiter} ${date.getFullYear()}`;
};

export const getDefaultDate = () => {
  const currentDate = new Date();
  currentDate.setDate(1);
  currentDate.setFullYear(currentDate.getFullYear() + 2);
  return currentDate;
};

export const getFormattedNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const stripCommas = num => num.replace(/,/g, "");
