export const orderValidation = {
  meal: 'required|min:4',
  price: 'number |required',
};
export const signUpValidation = {
  name: 'required|min:4',
  phoneNumber: 'number|required',
  email: 'email|required',
  password: 'required|min:6|max:20',
};
export const loginValidation = {
  email: 'email|required',
  password: 'required|min:6|max:20',
};
