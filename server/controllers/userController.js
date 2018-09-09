import winston from 'winston';
let globalArrayPlacer = [];

export const placeNewOrder = (req, res) => {
  const order = {
    productId: req.body.name,
    price: req.body.price
  };
  console.log("order", order);

  globalArrayHolder.push(order);
  console.log("Array", globalArrayPlacer);
  res.status(201).json({
    message: "order was created",
    order: globalArrayPlacer
  });
};