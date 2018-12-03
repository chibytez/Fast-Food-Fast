import validator from 'validatorjs';

export const orderValidation = {
  id: 'required|min:1',
  meal: 'required|min:4',
  price: 'required|min:3',
  option: 'required|min:1',
  status: 'required|min:1',
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


export const validatePlaceOrder = (req, res, next) => {
  const {
 id, meal, price, option, status } = req.body;
  const validation = new validator ({ id, meal, price, option, status }, orderValidation);
  validation.setAttributeNames({ meal: 'meal' });
  if (validation.fails()) {
    res.status(400)
      .send(validation.errors);
  }
  return next();
}
;