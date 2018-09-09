import winston from "winston";
let globalArrayHolder = [{
    Id:1,
    ProductId: "Rice And Chicken",
    Price: 2500
}];

export const getAllOrders = (req, res) => {
    res.status(200).json({
      success: true,
      message: "A list of all the Orders",
      order: globalArrayHolder
    });
  };

  export const getSingleOrders = (req, res) => {
    let orderId = req.params.Id;
    let currentOrder = globalArrayHolder.filter(e=> e.Id == orderId)[0];
    res.status(200).json({
      message: "Rice And Chicken",
      order: globalArrayHolder
    });
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