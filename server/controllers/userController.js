import products from '../helper/products';

export const getAllOrders = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'A list of all the Orders',
    orders: products,
  });
};


export const getSingleOrders = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const currentOrder = products.filter(e => e.id === id)[0];
  if (!currentOrder) {
    res.status(404);
  } else {
    res.status(200).json({
      order: currentOrder,
    });
  }
};

export const makeAnOrder = (req, res) => {
  const { id, productId, price } = req.body;

  products.push({ id, productId, price });
  res.status(201).json({
    message: 'order was created',
    order: products,
  });
};


export const cancelAnOrder = (req, res) => {
  const id = parseInt(req.params.id, 10);
  let currentOrder = products.filter(e => e.id === id)[0];
  if (!currentOrder) {
    res.sendStatus(404);
  } else {
    currentOrder = products.filter(e => e.id !== id);
    return res.status(200).json({
      message: 'deleted product!',
    });
  }
};
