export default (req, res) => {
  const errors = {};
  const order = req.body;
  if (!order.id) {
    errors.id = 'Id required';
  } if (!order.productId) {
    errors.productId = 'Quantity required';
  } if (!order.price) {
    errors.price = 'Price required';
  } if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }
};
