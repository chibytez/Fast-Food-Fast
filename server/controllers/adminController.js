import winston from "winston";
let globalArrayHolder = [{
  id:1,
  productId: "Rice And Chicken",
  price: 2500
},
{
id:2,
productId:'bole and fish',
price:2000
},
{
id:3,
productId:'pizza',
price:3000
}];

export const getAllOrders = (req, res) => {
res.status(200).json({
  success: true,
  message: "A list of all the Orders",
  order: globalArrayHolder
});
};

export const getSingleOrders = (req, res) => {
  let id = parseInt(req.params.id);
  let currentOrder = globalArrayHolder.filter(e=> e.id == id)[0];
if (!currentOrder){
  res.status(404);
}else{
  res.status(200).json({
    order:currentOrder
  });
};
};

  export const editAnOrder = (req, res) => {
    let orderId = req.params.Id;
    let currentOrder = globalArrayHolder.filter(e => orderId)[0];
  res.status(200).json({
    productId: req.body.name,
    price: req.body.price
  });
};

export const createNewItem = (req, res) => {
  const order = {
    productId: req.body.name,
    price: req.body.price
  };
  console.log("order", order);

  globalArrayHolder.push(order);
  console.log("Array", globalArrayHolder);
  res.status(201).json({
    message: "Item  was created",
    order: globalArrayHolder
  });

};

//delete item
export const deleteAnOrder = (req, res) =>{
  let orderId = req.params.Id;
  let currentOrder = globalArrayHolder.filter(e =>e.Id == orderId)[0];
res.status(200).json({
  message: "deleted order!"
});
};