import items from '../helper/items';

export const getAllOrders = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'A list of all the Orders',
    orders: items,
  });
};

export const getSingleOrders = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const currentOrder = items.filter(e => e.id === id)[0];
  if (!currentOrder) {
    res.status(404);
  } else {
    res.status(200).json({
      order: currentOrder,
    });
  }
};

export const createNewOrder = (req, res) => {
  const { id, productId, price } = req.body;
  items.push({ id, productId, price });
  res.status(201).json({
    message: 'order was created',
    order: items,
  });
};

export const editAnOrder = (req, res) => {
  const id = parseInt(req.params.id, 10);
  let currentOrder = items.filter(e => e.id === id)[0];
  if (!currentOrder) {
    res.status(400).send({ errors: { id: 'Order Id is required' } });
  } else {
    currentOrder = res.status(200).json({
      productId: req.body.productId,
      price: req.body.price,
    });
  }
};


// delete item
export const deleteAnOrder = (req, res) => {
  const id = parseInt(req.params.id, 10);
  let currentOrder = items.filter(e => e.id === id)[0];
  if (!currentOrder) {
    res.sendStatus(404);
  } else {
    currentOrder = items.filter(e => e.id !== id);
    return res.status(200).json({
      message: 'deleted product!',
    });
  }
};
