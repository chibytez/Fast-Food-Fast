export default (req, res, next) => {
  const errors = {};
  const order = req.body;
  if (!order.id) {
    errors.id = 'Id required';
  } if (!order.name) {
    errors.name = 'Quantity required';
  } if (!order.price) {
    errors.price = 'Price required';
  } if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }
  next();
};
