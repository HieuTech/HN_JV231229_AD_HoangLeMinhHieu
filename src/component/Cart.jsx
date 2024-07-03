import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { formatCurrency } from "../utils/formatCurrency";
import { useContext, useState } from "react";
import { GlobalContext } from "../theme/Global";
export default function Cart(prop) {

    const { isModalOpen, handleCancel } = prop;

    const { carts, handleAddToCart, saveData } = useContext(GlobalContext);
    const [isClose, setIsClose] = useState(false);


    const totalMoneyInCart = () =>{
        let totalMoney = 0;
        carts.map((cart)=>
            totalMoney += cart.product.price * cart.quantity
        )
        return formatCurrency(totalMoney);
    }

    const handleDeleteCart = (product) =>{
        const newArr = carts.filter((cart)=>
            product.id !== cart.product.id
        )

        saveData(newArr);
        setIsClose(false)
        
    }

    const handleOpen = () =>{
        setIsClose(true)
    }

     const handleClose = () => {
       setIsClose(false);
     };



  return (
    <>
      <Modal
        title="Cart"
        open={isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
        okText="CheckOut"
        cancelText="Back To Shop"
        className="absolute top-[40px] right-[35px] "
      >
        <div>
          {carts.length === 0 ? (
            <p className="text-center text-lg p-4">Your Cart Is Empty</p>
          ) : (
            <ul className="">
              <hr />
              {carts.map((cart) => (
                <li
                  key={cart.id}
                  className="flex items-center justify-between m-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={cart.product.images}
                      className="rounded-full w-16 h-16 
                   "
                    />
                    <div className="flex items-center flex-col">
                      <span className="font-semibold text-lg">
                        {" "}
                        {cart.product.productName}
                      </span>
                      <span>{formatCurrency(cart.product.price)}</span>
                    </div>
                  </div>

                  <Modal
                    title="Confirm"
                    open={isClose}
                    onOk={() => {
                      handleDeleteCart(cart.product);
                    }}
                    onCancel={handleClose}
                    okText="Delete"
                  >
                    <p className="text-center text-lg text-red-400">
                      Do You Want To Delete It
                    </p>
                  </Modal>
                  <div className="flex items-center gap-1">
                    <PlusOutlined
                      onClick={() => {
                        handleAddToCart(cart.product, false);
                      }}
                      className="cursor-pointer"
                    />
                    <span>{cart.quantity}</span>
                    <MinusOutlined
                      onClick={() => {
                        handleAddToCart(cart.product, true);
                      }}
                      className="cursor-pointer"
                    />
                    <DeleteOutlined
                      onClick={handleOpen}
                      className="cursor-pointer px-3"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}

          <hr />
          <p className="text-[18px] p-3">Total: {totalMoneyInCart()}</p>
        </div>
      </Modal>
    </>
  );
}
