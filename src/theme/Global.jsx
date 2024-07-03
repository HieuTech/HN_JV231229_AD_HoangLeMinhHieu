import { createContext, useState } from "react";

import productList from "../../data.json";
import Home from "../page/Home";

export const GlobalContext = createContext();

export default function Global() {
  const [carts, setCarts] = useState(() => {
    let result = JSON.parse(localStorage.getItem("carts")) || [];
    return result;
  });

  const saveData = (newData) => {
    setCarts(newData);
    localStorage.setItem("carts", JSON.stringify(newData));
  };

  const handleAddToCart = (product, isMinus) => {
    const cartFoundIndex = carts.findIndex(
      (cart) => cart.product.id === product.id
    );

    if (cartFoundIndex === -1) {
      const newCart = {
        id: Math.ceil(Math.random() * Date.now()),
        product,
        quantity: 1,
      };

      const newArr = [...carts, newCart];
      console.log("newArr", newArr);
      saveData(newArr);
    }
    else if(isMinus){
           carts[cartFoundIndex].quantity = carts[cartFoundIndex].quantity - 1;

           if(carts[cartFoundIndex].quantity === 0){
                const newArr = carts.filter((cart)=>
                    cart.id !== carts[cartFoundIndex].id
                )
                saveData(newArr);
                return
           }

           const newArr = [...carts];
           saveData(newArr);
    }
    
    else{

        carts[cartFoundIndex].quantity = carts[cartFoundIndex].quantity +1;

        const newArr = [...carts];
        saveData(newArr);


    }
  };

  const globalVariable = {
    productList,
    handleAddToCart,
    carts,
    saveData,
  };

  return (
    <>
      <GlobalContext.Provider value={globalVariable}>
        <Home />
      </GlobalContext.Provider>
    </>
  );
}
