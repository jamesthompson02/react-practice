const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRegex = /^[a-zA-Z '-]+$/;
const capitalRegex = /[A-Z]/;
const lowerRegex = /[a-z]/;
const specialRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numberRegex = /[0-9]/;
const spaceRegex = /\ /;
const eightLength = (password) => {
  return password.length >= 8;
};

export const emailValidation = (email) => {
  return emailRegex.test(email);
};

export const nameValidation = (name) => {
  if (nameRegex.test(name) && spaceRegex.test(name)) {
    return true;
  }
  return false;
};

export const passwordValidation = (password) => {
  if (
    capitalRegex.test(password) &&
    lowerRegex.test(password) &&
    specialRegex.test(password) &&
    numberRegex.test(password) &&
    eightLength(password)
  ) {
    return true;
  }
  return false;
};
