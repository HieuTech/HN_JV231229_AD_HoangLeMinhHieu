import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react'
import Cart from '../component/Cart';
import { GlobalContext } from '../theme/Global';

export default function Header() {
   const [isModalOpen, setIsModalOpen] = useState(false);


   const {carts} = useContext(GlobalContext);

   const totalProductInCart = () =>{
     let total = 0;
     carts.map((cart)=>
      total += cart.quantity
    )
    return total;
   }


  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <header className="bg-orange-300 text-white flex items-center justify-between py-3 px-5">
        <div>
          <ul className="flex items-center gap-4 ">
            <li>Home Page</li>
            <li>List Product</li>
          </ul>
        </div>
        <div className="relative ">
          <ShoppingCartOutlined onClick={showModal} className="text-3xl " />
          <span className="absolute bg-red-500 w-5 h-5 text-center rounded-2xl right-[-13px]">
            {totalProductInCart()}
          </span>
        </div>
        <Cart isModalOpen={isModalOpen} handleCancel={handleCancel} />
      </header>
    </>
  );
}
