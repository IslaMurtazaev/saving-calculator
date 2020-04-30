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
