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

export const getSingleOrders = (req, res) => {
  let orderId = req.params.Id;
  let currentOrder = globalArrayHolder.filter(e=> e.Id == orderId)[0];
  res.status(200).json({
    message: "Rice And Chicken",
    order: globalArrayplacer
  });
};

export const cancelAnOrder = (req, res) =>{
  let orderId = req.params.Id;
  let currentOrder = globalArrayHolder.filter(e =>e.Id == orderId)[0];
res.status(200).json({
  message: "Cancelled order!"
});
};