export const getFormattedDate = date => {
  const month = date.toLocaleString('default', { month: 'long' });
  return `${month}, ${date.getFullYear()}`;
};
