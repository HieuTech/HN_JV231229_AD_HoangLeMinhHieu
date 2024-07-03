

 const formatCurrency = (money) =>{
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });

}


export {formatCurrency}