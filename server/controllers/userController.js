import winston from 'winston';

let globalArrayPlacer = [
  {
    id:1,
    name:'rice and Chicken',
    price:4000
  },
  {
    id:2,
    name:'bole and fish',
    price:2000
  },
  {
    id:3,
    name:'pizza',
    price:3000
  }
];

export const getAllOrders = (req, res) => {
  res.status(200).json({
    success: true,
    message: "A list of all the Orders",
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