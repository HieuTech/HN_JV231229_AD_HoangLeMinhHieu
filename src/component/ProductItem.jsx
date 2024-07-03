import { Button } from 'antd';
import { formatCurrency } from '../utils/formatCurrency';
import { useContext } from 'react';
import { GlobalContext } from '../theme/Global';
export default function ProductItem(prop) {
    const {product } = prop;

    const {handleAddToCart} = useContext(GlobalContext)
  return (
    <>
      <div
        key={product.id}
        className=" bg-sky-50 flex flex-col items-center gap-3 p-2 rounded-md "
      >
        <img
          src={product.images}
          className="p-2 min-h-[170px] object-fit"
        ></img>
        <h1 className="font-semibold text-lg">{product.productName}</h1>
        <p>{formatCurrency(product.price)}</p>
        <Button type="primary"
        onClick={()=>{handleAddToCart(product)}}
        >
          Add To Cart
        </Button>
      </div>
    </>
  );
}
