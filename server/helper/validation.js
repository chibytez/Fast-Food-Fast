export const orderValidation = {
  user_id : 'required|min:1',
   email: 'email|required',
   meal: 'required|min:4',
   price: 'required|min:3',
   option:'required|min:1', 
   status:'required|min:1'
};
export const signUpValidation = {
  name: 'required|min:4',
  phoneNumber: 'required|min:4',
  email: 'email|required',
  password: 'required|min:6|max:20',
};
export const loginValidation = {
  email: 'email|required',
  password: 'required|min:6|max:20',
};
