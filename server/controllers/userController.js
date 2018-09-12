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
  let id = parseInt(req.params.id);
  let currentOrder = globalArrayPlacer.filter(e=> e.id == id)[0];
if (!currentOrder){
  res.status(404);
}else{
  res.status(200).json({
    order:currentOrder
  });
};
};

export const cancelAnOrder = (req, res) => {
  let id = parseInt(req.params.id);
  let currentOrder = globalArrayPlacer.filter(e =>e.id === id)[0];
if(!currentOrder){
return res.sendStatus(404);
}else{
globalArrayPlacer = globalArrayPlacer.filter(e =>e.id !== id);
res.status(200).json({
  message: "deleted product!"
});
};
};