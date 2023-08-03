export const keyGenerator = () => {
  let key = "";
  for (let i = 0; i < 64; i++) {
    const newNumber = Math.floor(Math.random() * 10);
    key += newNumber;
  }
  return key;
};
